const { version } = require('../package.json');

module.exports = args => {
  console.log(`💻 The current version is:  ${version}`);
}