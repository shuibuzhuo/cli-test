const npminstall = require('npminstall')
const path = require('path')
const userHome = require('user-home')

npminstall({
  root: path.resolve(userHome, '.shuibuzhuo-cli-dev'),
  storeDir: path.resolve(userHome, '.shuibuzhuo-cli-dev', 'node_modules'),
  registry: 'https://registry.npmmirror.com',
  pkgs: [
    { name: 'foo', version: '~1.0.0' }
  ]
})
