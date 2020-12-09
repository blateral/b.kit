# b.kit - React component library to b.uild awesome websites

[Storybook stories](https://blateral.github.io/b.kit)

## Table of contents

-   [Usage](#usage)
    -   [Installation](#installation)
    -   [Imports](#imports)
    -   [Theming](#theming)
    -   [Slider package](#slider-package)
-   [Developement](#developement)

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
import { ImageCarousel, Provider } from '@blateral/b.kit';

const customTheme = {
    colors: {
        mono: {
            light: '#ff0000',
        },
    },
};

<Provider theme={customTheme}>
    <ImageCarousel>...</ImageCarousel>
</Provider>;
```

### Slider package

> Some components like the `ImageCarousel` using the external `slick-carousel` package. To use them properly its important to install the `slick-carousel` package (also listed under peer dependenies). The b.kit library component then takes care of all needed slick CSS imports.

# Developement

The react component library is compiled with typescript and bundled with [Rollup](https://www.npmjs.com/package/rollup).
