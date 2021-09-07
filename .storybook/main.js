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
    ],
};
