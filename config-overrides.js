const path = require('path')

module.exports = function override(config, env) {
  //do stuff with the webpack config...
  console.log(config.entry)

  config.entry = {
    index: path.resolve(__dirname, 'src/index.js'),
    chat: path.resolve(__dirname, 'src/chat-entry.js'),
  }

  // console.log(config.plugins[0])

  // throw new Error()
  return config;
}