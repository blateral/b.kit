const path = require('path');

module.exports = ({ config }) => {
    config.resolve.modules.push(path.resolve(__dirname, 'node_modules'));
    config.resolve.modules.push(path.resolve(__dirname, '../src'));

    return config;
};
