import { LibThemeProvider } from '../src/utils/LibThemeProvider';

const customTheme = {
    // fonts: {
    //     base: {
    //         family: 'MS Comic Sans',
    //     },
    //     types: {
    //         copy: {
    //             medium: {
    //                 color: 'blue',
    //                 colorInverted: 'green',
    //             },
    //             small: {
    //                 color: 'olive',
    //                 colorInverted: 'green',
    //             },
    //         },
    //         'copy-b': {
    //             medium: {
    //                 color: 'red',
    //             },
    //             big: {
    //                 color: 'orange',
    //             },
    //         },
    //         'heading-2': {
    //             color: `linear-gradient(
    //                 89.07deg,
    //                 #407199 24.08%,
    //                 #a8dde0 116.66%
    //             )`,
    //             colorInverted: 'spark',
    //         },
    //         super: {
    //             color: 'magenta',
    //             colorInverted: 'cyan',
    //         },
    //     },
    // },
};

export const parameters = {
    layout: 'fullscreen',
    backgrounds: {
        values: [],
    },
};

export const decorators = [
    (Story) => (
        <LibThemeProvider theme={customTheme}>
            <Story />
        </LibThemeProvider>
    ),
];
