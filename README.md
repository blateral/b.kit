![b.kit logo](./public/images/Kit_Logo.svg)

# b.kit - React component library to b.uild awesome websites

The b.kit library consists of a set of essential React components that can be implemented and modified in any React project.
The goal is to reduce the need of rebuilding each component every time. Instead they are defined, tested and optimized in one library and can be reused in multiple projects.

See the up to date [Storybook stories](https://blateral.github.io/b.kit) of each b.kit component.

<br />

## Installation

Run

```
yarn add @blateral/b.kit
```

to install the component library. Because some packages like React, ReactDom and StyledComponents cannot run on multiple instances they are not included in the library.

> Therefore all peer dependencies must be installed seperately.

<br />

## Imports

The library exports all components as named exports so you can import and use them like:

```jsx
import { Article } from '@blateral/b.kit';

<Article
    title="Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
    superTitle="Cum sociis natoque"
    text="Lorem ipsum dolor sit amet..."
/>;
```

<br />

## Theming

Each component uses a default set of fallback styles that are bundled within the package. To override this styles the library uses the theme context of styled-components.
To use a custom theme the component must be wrapped within the exported library provider HOC component. All project specific style overrides can be defined through a
theme object and passed to the provider's `theme` property.

> Values like `undefined`, `null` or empty strings are ignored.

```jsx
import { Article, LibThemeProvider } from '@blateral/b.kit';

const customTheme = {
    colors: {
        primary: {
            default: '#2B4356',
            hover: '#009FE3',
            inverted: '#ffffff',
            invertedHover: '#009FE3',
        },
    },
};

<LibThemeProvider theme={customTheme}>
    <Article
        title="Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
        superTitle="Cum sociis natoque"
        text="Lorem ipsum dolor sit amet..."
    />
</LibThemeProvider>;
```

<br />

## Connectors

Connectors are used to connect b.kit components to data coming from a Content Management System (CMS). To date there two
connector packages available:

-   [b.kit MODX](https://www.npmjs.com/package/@blateral/b.kit-modx) `yarn add @blateral/b.kit-modx`
-   [b.kit PRISMIC](https://www.npmjs.com/package/@blateral/b.kit-prismic) `yarn add @blateral/b.kit-prismic` (not maintained anymore. Not compatible with B.KIT 2 versions and version 2 beta releases!)

<br />

# Developement

The react component library is compiled with typescript and bundled with [Rollup](https://www.npmjs.com/package/rollup).

<br />

## Project architecture

The library project is splitted into three pieces.

-   The source component folder `src`
-   The Storybook folder `stories`
-   The build folder `lib` (it contains the bundled library content that is shipped to npm)

<br />

## Script commands

To build and bundle the library with Rollup into the lib folder enter the script:

`yarn build`

To start a local storybook watch task enter:

`yarn storybook`

To publish all stories to Github Pages enter:

`yarn deploy-storybook`

> Before each commit to Github the Husky package takes care of the Storybook stories and deploys them automatically to Github Pages.

<br />

## Local Testing

The bundled package can be tested locally with a npm package called [Yalc](https://github.com/wclr/yalc). `Yalc` acts as very simple local repository for locally developed packages to share them across a local environment.

<br />

### Workflow

Install yalc globally: `yarn global add yalc`.

**Inside the library/package repository:**

1. Run `yarn build` to bundle the package.
2. Run `yalc push` to push it to local global store (~/.yalc).

**Inside a repository that consumes the package:**

1. To link local package run `yalc add <repository-name>` (e.g. yalc add @blateral/b.kit).
2. Before committing to remote repository remove the local package links by running `yalc remove <repository-name>` or `yalc remove --all`.
3. Use `yarn --check-files` to savely install the remote packages defined in package.json. In some repositories there is also a script `yarn lookup` that does the same.
