#!/usr/bin/env node
'use strict'

const path = require('path')

require('../src/pure-typescript')

const args  = process.argv.slice(2)
const cwd   = process.cwd()

let filename = args[0]
if (!/\.ts$/i.test(filename)) {
  filename += '.ts'
}

const fullFilename = path.join(cwd, filename)

require(fullFilename)
