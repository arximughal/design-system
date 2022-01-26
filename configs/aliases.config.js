const path = require('path');

// __dirname gives exact path where the file is, in this case: PROJECT/configs. It is needed to add ../ at the beginning of the aliases to solve correct path.

const aliases = {
    '@arximughal/button': path.resolve(__dirname, '../components/Button/src/index'),
    '@arximughal/avatar': path.resolve(__dirname, '../components/Avatar/src/index')
};

module.exports = { aliases };
