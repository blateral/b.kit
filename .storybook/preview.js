import { LibThemeProvider } from '../src/utils/LibThemeProvider';

const customTheme = {
    globalSettings: {
        sections: {
            newsLocaleKey: 'de',
            newsDateFormat: 'dd.mm.YYYY',
            edgeRadius: '5px',
        },
    },
    fonts: {
        base: {
            family: 'MS Comic Sans',
        },
        types: {
            copy: {
                medium: {
                    color: 'blue',
                    colorInverted: 'green',
                },
                small: {
                    color: 'olive',
                    colorInverted: 'green',
                },
            },
            'copy-b': {
                medium: {
                    color: 'red',
                },
                big: {
                    color: 'orange',
                },
            },
            'heading-2': {
                colorGradient: `linear-gradient(
                    89.07deg,
                    #407199 24.08%,
                    #a8dde0 116.66%
                )`,
                colorInverted: 'spark',
            },
            super: {
                color: 'magenta',
                colorInverted: 'cyan',
            },
        },
    },
};

export const parameters = {
    layout: 'fullscreen',
    backgrounds: {
        values: [],
    },
    controls: {
        disabled: true,
    },
};

export const decorators = [
    (Story) => (
        // <LibThemeProvider theme={customTheme}>
        <LibThemeProvider>
            <Story />
        </LibThemeProvider>
    ),
];
