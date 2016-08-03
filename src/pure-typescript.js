/**
 * Pure TypeScript
 *
 * Treat typescript as the first class citizen!
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

    const result = ts.transpileModule(tsContent, {
      filename
      , compilerOptions: DEFAULT_COMPILER_OPTIONS
      , reportDiagnostics: true
    })
    console.log(result)

    //  const diagnosticList = result.diagnostics ?
    //     formatDiagnostics(result.diagnostics, options, cwd, ts) :
    //     []

    //   if (diagnosticList.length) {
    //     throw new TSError(diagnosticList)
    //   }

    module._compile(result.outputText, filename)
  }

  require.extensions['.ts'] = pureTypeScript

  module.exports = pureTypeScript.default = pureTypeScript.pureTypeScript = pureTypeScript

})()
