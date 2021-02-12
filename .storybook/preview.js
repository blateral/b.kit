import { LibThemeProvider } from '../src/utils/LibThemeProvider';

const customTheme = {
    fonts: {
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
            color: 'yellow',
            colorInverted: 'spark',
        },
        super: {
            color: 'magenta',
            colorInverted: 'cyan',
        },
    },
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
