# b.kit - React component library to b.uild awesome websites

[Storybook stories](https://blateral.github.io/b.kit)

## Table of contents

-   [Usage](#usage)
    -   [Installation](#installation)
    -   [Imports](#imports)
    -   [Theming](#theming)
    -   [Optional packages](#optional-packages)
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

### Optional packages

> Some components like the `ImageCarousel` using the external `slick-carousel` and `react-slick` packages. To use them properly its important to install all packages (also listed under peer dependenies) and import the related CSS files.

As imports (e.g. in Nextjs `_app.tsx`):

```jsx
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
```

As CDN link (e.g. in Storybook `preview-head.html`):

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

## Local library testing

For local testing you can import the library package with a simlink. Call `yarn link` inside the library root directory and `yarn link "path-to/@blateral/b.kit"` inside the test project root directory. Peer dependencies like React, ReactDom and StyledComponents only allowing one instance at a time. Because the local b.kit library project has fully installed packages it is neccessary to use the same instances in the example test project. To do so you can link them in the `package.json`:

```json
    "dependencies": {
        "react": "link:../b.kit/node_modules/react",
        "react-dom": "link:../b.kit/node_modules/react-dom",
        "styled-components": "link:../b.kit/node_modules/styled-components"
    },
```

> Due to the behaviour of simlinks after a library rebuild sometimes the library types are not fully updated and available in the test project. To fix this you can relink the package or change the content of the entry `index.ts` file on every build.
