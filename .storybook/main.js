module.exports = {
    stories: ['../src/stories/**/*.stories.tsx'],
    addons: ['@storybook/addon-docs', '@storybook/addon-backgrounds'],
    webpackFinal: async (config, { configType }) => {
        config.output.publicPath =
            configType === 'PRODUCTION' ? '/b.kit/' : '/';
        return config;
    },
};
