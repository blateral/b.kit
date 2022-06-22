![b.kit logo](./public/images/Kit_Logo.svg)

# b.kit - React component library to b.uild awesome websites

The b.kit library consists of a set of essential React components that can be implemented and modified in any React project. The goal is to reduce the need of rebuilding each component every time. Instead they are defined in one library and can be reused in multiple projects.

See the up to date [Storybook stories](https://blateral.github.io/b.kit) of each b.kit component.

## Table of contents

-   [Usage](#usage)
    -   [Installation](#installation)
    -   [Imports](#imports)
    -   [Theming](#theming)
    -   [Theme settings](#theme-settings)
        -   [Colors](#colors)
        -   [Fonts](#fonts)
        -   [Using styles](#using-styles)
    -   [Optional packages](#optional-packages)
        -   [Carousels](#Carousels)
-   [Developement](#developement)
    -   [Project architecture](#project-architecture)
    -   [Script commands](#script-commands)
    -   [Local library testing](#local-library-testing)

## Usage

### Installation

Run `yarn add @blateral/b.kit` to install the component library. Because some packages like React, ReactDom and StyledComponents cannot run on multiple instances they are not included in the library.

> Therefore all peer dependencies must be installed seperately.

### Imports

The library exports all components as named exports so you can import and use them like:

```jsx
import { ImageCarousel } from '@blateral/b.kit';

<ImageCarousel
    bgMode="full"
    onInit={(steps) => console.log(steps)}
    images={[...]}
/>
```

### Theming

Each component uses a default set of fallback styles that are bundled within the package. To override this styles the library uses the theme context of styled-components. To use a custom theme the component must be wrapped within the exported library provider. All project specific style overrides can be defined through a Styled-Components `DefaultTheme` object and passed to the provider's `theme` property.

> Values like `undefined`, `null` or empty string are ignored.

```jsx
import { ImageCarousel, LibThemeProvider } from '@blateral/b.kit';

const customTheme = {
    colors: {
        mono: {
            light: '#ff0000',
        },
    },
};

<LibThemeProvider theme={customTheme}>
    <ImageCarousel>...</ImageCarousel>
</LibThemeProvider>;
```

### Theme settings

The `DefaultTheme` can be configured by passing a custom theme object to the theme provider. It consists of two parts: `colors` and `fonts`. To override the default b.kit values it is not neccessary to replace all values or subobjects. Just define the values to want to replace and you good to go.

#### Colors

Each color is defined in the subobject `colors` of the `DefaultTheme`. In order not to be too specific to a project scenario, they are named with abstract names that do not refer to the actual colors assigned. As example the default b.kit values below:

```javascript
{
    dark: '#000000',
    light: '#ffffff',
    mono: {
        light: '#F0F0F0',
        medium: '#C8C8C8',
        dark: '#A5A5A5',
    },
    primary: {
        light: '#DD8AA3',
        medium: '#98012E',
        dark: '#59011B',
    },
    secondary: {
        light: '#5A7384',
        medium: '#35444E',
        dark: '#222A30',
    },
    tertiary: {
        light: '#F2F5FA',
        medium: '#C9CED7',
        dark: '#A8ABB4',
    },
};
```

#### Fonts

Font styles are seperated in multiple types like `copy`, `heading`, `super` (super title) and others. Some of them have different forms e.g. `copy-i` for copy italic or `copy-b` for copy bold.

```typescript
interface Fonts {
    copy: FontOptions;
    'copy-i': FontOptions;
    'copy-b': FontOptions;
    super: FontProps;
    'heading-1': FontProps;
    'heading-2': FontProps;
    'heading-3': FontProps;
    'heading-4': FontProps;
    label: FontOptions;
    callout: FontOptions;
}
```

While `FontProps` containing the style props needed for the CSS styling, `FontOptions` are a another way to seperate the font types into different sizes:

```typescript
interface FontOptions {
    small: FontProps;
    medium: FontProps;
    big: FontProps;
}
```

#### Using styles

To use the styles that a generated by modifing the `DefaultTheme` context you need the Styled Components theme context reference.

Outside of JSX in some of React's functional components:

```typescript
const theme = React.useContext(ThemeContext);
```

Inside a Styled Component:

```jsx
color: ${({theme}) => ...};
```

Then you can use the same functions also used by every b.kit component to get you the right color and font values:

```typescript
getColors(theme).dark;
```

```typescript
getFonts(theme).copy.small;
```

### Optional packages

#### Carousels

> Some components like the `ImageCarousel` using the external `slick-carousel` and `react-slick` packages. To use them properly its important to install all packages (also listed under peer dependenies) and import the related CSS files.

As imports (e.g. in Nextjs `_app.tsx`):

```jsx
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
```

As CDN link (e.g. in Storybook `preview-head.html` or NextJs's `_document.tsx`):

```jsx
<link
    rel="stylesheet"
    type="text/css"
    charset="UTF-8"
    href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
/>
<link
    rel="stylesheet"
    type="text/css"
    href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
/>
```

#### Map

> The Map component is made up with `leaflet`. Therefore the NPM Leaflet package must be installed to properly use all map features.

To diplaying the map in the right way you should also import the leaflet CSS styles:

As imports (e.g. in Nextjs `_app.tsx`):

```jsx
import 'leaflet/dist/leaflet.css';
```

As CDN link (e.g. in Storybook `preview-head.html` or NextJs's `_document.tsx`):

```jsx
<link
    rel="stylesheet"
    href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
/>
```

# Developement

The react component library is compiled with typescript and bundled with [Rollup](https://www.npmjs.com/package/rollup).

## Project architecture

The library project is splitted into three pieces.

-   The source component folder `src`
-   The Storybook folder `stories`
-   The build folder `lib` (it contains the bundled library content that is shipped to npm)

## Script commands

To build and bundle the library with Rollup into the lib folder enter the script:

`yarn build`

To start a local storybook watch task enter:

`yarn storybook`

To publish all stories to Github Pages enter:

`yarn deploy-storybook`

> Before each commit to Github the Husky package takes care of the Storybook stories and deploys them automatically to Github Pages.

## Local Testing

The bundled package can be tested locally with a npm package called [Yalc](https://github.com/wclr/yalc). `Yalc` acts as very simple local repository for locally developed packages to share them across a local environment.

### Workflow

Install yalc globally: `yarn global add yalc`.

**Inside the library/package repository:**

1. Run `yarn build` to bundle the package.
2. Run `yalc push` to push it to local global store (~/.yalc).

**Inside a repository that consumes the package:**

1. To link local package run `yalc add <repository-name>` (e.g. yalc add @blateral/b.kit).
2. Before committing to remote repository remove the local package links by running `yalc remove <repository-name>` or `yalc remove --all`.
3. Use `yarn --check-files` to savely install the remote packages defined in package.json. In some repositories there is also a script `yarn lookup` that does the same.
