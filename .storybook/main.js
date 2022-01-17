// .storybook/main.js

const path = require('path');
const aliases = require('../configs/aliases.config');
// Export a function. Accept the base config as the only param.
module.exports = {
  //stories: async (list) => [...list, ...findStories()],
  stories: ['../components/**/src/*.stories.js'],
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    });

    // Return the altered config
    return config;
  },
};
