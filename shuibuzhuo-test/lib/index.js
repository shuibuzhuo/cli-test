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

program.parse(process.argv);
