#!/usr/bin/env node

const commander = require('commander')
const pkg = require('../package.json')

// const { program } = commander

const program = new commander.Command()

program
  .name(Object.keys(pkg.bin)[0])
  .usage('<command> [options]')
  .version(pkg.version)
  .option('-d, --debug', '是否开启调试模式', false)
  .option('-e, --envName <envName>', '获取环境变量名称');
  

// command 注册命令
const clone = program.command('clone <source> [destination]')
clone
  .description('clone a repo')
  .option('-f, --force', '是否强制克隆')
  .action((source, destination, cmdObj) => {
    console.log('do clone', source, destination, cmdObj.force);
  })

// addCommand 注册子命令
const service = new commander.Command('service')
service
  .command('start [port]')
  .description('start service at some port')
  .action(port => {
    console.log('start service at port', port);
  })
service
  .command('stop')
  .description('stop service')
  .action(() => {
    console.log('stop service');
  })
  
program.addCommand(service)

// program
//   .command('install [name]', 'install package', {
//     executableFile: 'shuibuzhuo-cli-dev',
//     isDefault: true,
//     // hidden: true
//   }).alias('i')

// program
//   .arguments('<cmd> [options]')
//   .description('test command', {
//     cmd: 'command to run',
//     options: 'options for command'
//   })
//   .action((cmd, options) => {
//     console.log(cmd, options);
//   })

// 1. 自定义 help 信息
// program.helpInformation = function() { 
//   return 'help information'
// }

// program.on('--help', function() {
//   console.log('help information');
// })

// 2. 实现 debug 模式
program.on('option:debug', function() {
  if (program.debug) {
    process.env.LOG_LEVEL = 'verbose'
  }

  console.log(process.env.LOG_LEVEL);
})

// 3. 对未知命令监听
program.on('command:*', function(obj) {
  console.log('未知的命令：', obj[0]);
  const availableCommands = program.commands.map(cmd => cmd.name())
  console.log(availableCommands);
  console.log('可用命令：' + availableCommands.join(', '));
})

program.parse(process.argv);
