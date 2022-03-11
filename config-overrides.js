const multipleEntry = require('react-app-rewire-multiple-entry')

module.exports = function override(config, env) {

  const plugins = config.plugins.filter(p => p.constructor.name === 'HtmlWebpackPlugin')
  plugins.forEach(p => {
    p.options = p.userOptions
  })

  multipleEntry([{
    entry: 'src/chat-entry.js',
    template: 'public/chat.html',
    outPath: '/chat.html'
  }]).addMultiEntry(config)

  plugins.forEach(p => {
    p.userOptions = p.options
    delete p.options
  })

  return config;
}