import { LibThemeProvider } from '../src/utils/LibThemeProvider';
import DebugLines from '../src/components/debug/DebugLines';

const customTheme = {
    globalSettings: {
        sections: {
            newsLocaleKey: 'de',
            newsDateFormat: 'dd.mm.YYYY',
            edgeRadius: '5px',
        },
    },
    colors: {
        new: {
            sectionBg: {
                medium: 'red',
            },
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
    status: {
        type: 'beta',
        statuses: {
            preview: {
                background: '#FD6838',
                color: '#fff',
                description: 'Reworked not stable component',
            },
            qsReady: {
                background: '#0CABA8',
                color: '#fff',
                description: 'Component is ready for final QS',
            },
        },
    },
    options: {
        storySort: (previous, next) => {
            // const [previousStory, previousMeta] = previous;
            const [nextStory, nextMeta] = next;

            if (
                nextMeta.kind.search('Info') ||
                nextMeta.kind.search('Introduction')
            ) {
                return -1;
            } else return 0;
        },
    },
};

export const decorators = [
    (Story) => (
        <>
            {/* <LibThemeProvider theme={customTheme}>
                <Story />
            </LibThemeProvider> */}
            <Story />
            {/* <DebugLines /> */}
        </>
    ),
];
