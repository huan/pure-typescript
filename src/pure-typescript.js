/**
 * Pure TypeScript
 *
 * Treat typescript as the first class language!
 *
 * for Full Stack TypeScript Developer:
 *  - No more compile
 *  - Zero settings
 *  - Write and Run like JavaScript
 *
 * GitHub: https://github.com/zixia/pure-typescript
 *
 */
;(function(){
  'use strict'

  const fs = require('fs')
  const ts = require('typescript')
  const { TypeScriptSimple } = require('typescript-simple')

  const DEFAULT_COMPILER_OPTIONS = {
    declaration: false
    // , emitDecoratorMetadata: true
    // , experimentalDecorators: true
    , module: ts.ModuleKind.CommonJS
    , moduleResolution: ts.ModuleResolutionKind.NodeJs
    , noEmitOnError: true
    , noEmit: false

    , noImplicitAny: false
    , target: ts.ScriptTarget.ES6
    , sourceMap: true
    , inlineSources: true
    // , inlineSourceMap: true
  }

  const compilerOptions = Object.assign({}
    , DEFAULT_COMPILER_OPTIONS
    , {
    // TODO: --dev & --prod settings switcher
  })

  delete compilerOptions.outDir

  const tss = new TypeScriptSimple(compilerOptions)

  function pureTypeScript(module, fileName) {
    const ts = fs.readFileSync(fileName, 'utf8')
    let js
    try {
      js = tss.compile(ts, fileName)
    } catch (e) {
      throw new Error(`Syntax error in ${fileName}: ${e.message}`)
    }
    // console.log(js)
    module._compile(js, fileName)
  }

  // require('source-map-support').install({
  //     environment: 'node'
  //   , hookRequire: true
  // })

  require.extensions['.ts'] = pureTypeScript

  module.exports = pureTypeScript.default = pureTypeScript.pureTypeScript = pureTypeScript

})()
