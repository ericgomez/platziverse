#!/usr/bin/env node

'use strict'

// const minimist = require('minimist')
const args = require('args')

console.log('Hello Platziverse!')

// const args = minimist(process.argv)
// console.log(args)
// console.log(args.name)
// console.log(args.host)

args
  .option('port', 'The port on which the app will be running', 3000)
  .option('reload', 'Enable/disable livereloading')
  .command('serve', 'Serve your static site', ['s'])
 
const flags = args.parse(process.argv)


// ./platziverse.js -a --name IoT --host localhost

