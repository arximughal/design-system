const path = require('path');

// __dirname gives exact path where the file is, in this case: PROJECT/configs. It is needed to add ../ at the beginning of the aliases to solve correct path.

const aliases = {
    '@arximughal/uds': path.resolve(__dirname, '../DesignSystem/uds/index'),
    '@arximughal/button': path.resolve(__dirname, '../DesignSystem/Components/Button/src/index'),
    '@arximughal/avatar': path.resolve(__dirname, '../DesignSystem/Components/Avatar/src/index')
};

module.exports = { aliases };
