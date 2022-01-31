module.exports = {
    stories: ['../src/stories/**/*.stories.@(tsx|mdx)'],
    addons: [
        {
            name: '@storybook/addon-essentials',
            options: {
                actions: false,
                controls: false,
            },
        },
        '@etchteam/storybook-addon-status',
        '@storybook/addon-a11y',
    ],
};
