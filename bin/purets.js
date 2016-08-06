#!/usr/bin/env node
'use strict'

const path = require('path')
const fs = require('fs')

require('../src/pure-typescript')

const cwd   = process.cwd()
let args  = process.argv.slice(2)

let filename = path.resolve(cwd,args[0])

if (!/\.ts$/i.test(filename)) {
  try { fs.accessSync(filename, fs.F_OK) }
  catch (e) { // not exist
    try {
      fs.accessSync(filename + '.ts', fs.F_OK) 
      filename += '.ts'
    } catch (_) { // '.ts' also not exist
      throw e // throw origal file not found error
    }
  }
}

// proxy argv to the end program
process.argv = [
  ...process.argv.slice(0,1)
  , ...process.argv.slice(2)
]

require(filename)
