const path = require('path');
const aliases = require('../configs/aliases.config');
// Export a function. Accept the base config as the only param.
module.exports = {
  stories: [
    '../DesignSystem/Components/**/src/*.stories.js',
    '../DesignSystem/Components/**/src/*.stories.mdx',
    '../DesignSystem/Docs/*.stories.mdx'
  ],
  webpackFinal: async (config, { configType }) => {
    // get index of css rule
    const ruleCssIndex = config.module.rules.findIndex(
      (rule) => rule.test.toString() === "/\\.css$/"
    );
    
    // map over the 'use' array of the css rule and set the 'module' option to true
    config.module.rules[ruleCssIndex].use.map((item) => {
      if (item.loader && item.loader.includes("/css-loader/")) {
        item.options.modules = {
          mode: "local",
          localIdentName:
            configType === "PRODUCTION"
              ? "[local]__[hash:base64:5]"
              : "[name]__[local]__[hash:base64:5]",
        };
      }
      
      return item;
    });
    
    return config;
  },
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-controls',
    '@storybook/addon-essentials',
    '@storybook/preset-scss',
  ],
};
