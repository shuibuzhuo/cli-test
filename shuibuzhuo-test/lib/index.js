#!/usr/bin/env node

const commander = require('commander')
const pkg = require('../package.json')

// const { program } = commander

const program = new commander.Command()

program.version(pkg.version).parse(process.argv)
