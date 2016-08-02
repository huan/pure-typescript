/**
 * Pure TypeScript
 * 
 * for Full Stack TypeScript Developer:
 *  - No more compile
 *  - Zero settings
 *  - Write then Run like JavaScript 
 * 
 * GitHub: https://github.com/zixia/pure-typescript
 * 
 */
;(function(){
  'use strict'

  const DEFAULT_COMPILER_OPTIONS = {
    "declaration": true
    , "emitDecoratorMetadata": true
    , "experimentalDecorators": true
    , "module": "commonjs"
    , "moduleResolution": "node"
    , "noEmitOnError": true
    , "noImplicitAny": false
    , "outDir": "./"
    , "rootDir": "./"
    , "sourceMap": true
    , "target": "es6"
    , "inlineSources": true
  }

  function pureTypeScript(module, filename) {
    const fs = require('fs')
    const ts = require('typescript')

    var tsContent = fs.readFileSync(filename, 'utf8')
    // console.log(tsContent)

    const compilerOptions = Object.assign({}
      , DEFAULT_COMPILER_OPTIONS
      , {
      // TODO: --dev & --prod settings switcher
    })

    const output = ts.transpileModule(tsContent, {
      filename
      , compilerOptions: DEFAULT_COMPILER_OPTIONS
      , reportDiagnostics: true
    })
    // console.log(output)
    module._compile(output.outputText, filename)
  }

  require.extensions['.ts'] = pureTypeScript

  module.exports = pureTypeScript.default = pureTypeScript.pureTypeScript = pureTypeScript

})()
