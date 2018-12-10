const path = dir => require('path').join(__dirname, dir)
module.exports = {
  pwa: {
    name: 'LogusCast'
  },

  chainWebpack: config => {
    const alias = (alias, path) => config.resolve.alias.set(alias, path)
    alias('@', path('/src'))
    alias('assets', path('./src/assets'))
    alias('#', path('/src/views'))
    alias('~', path('/src/components'))
  },

  lintOnSave: undefined
}
