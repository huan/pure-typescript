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

  require('source-map-support').install({
      environment: 'node'
    , hookRequire: true
  })

  const DEFAULT_COMPILER_OPTIONS = {
    declaration: false
    // , emitDecoratorMetadata: true
    // , experimentalDecorators: true
    , module: 'commonjs'
    , moduleResolution: 'node'
    , noEmitOnError: true
    , noEmit: false

    , noImplicitAny: false
    , outDir: './pure-typescript.tmp'
    , rootDir: './'
    , target: 'es6'
    // , sourceMap: true
    , inlineSources: true
    , inlineSourceMap: true
  }

  /*
    * This function will compile source text from 'input' argument using specified compiler options.
    * If not options are provided - it will use a set of default compiler options.
    * Extra compiler options that will unconditionally be used by this function are:
    * - isolatedModules = true
    * - allowNonTsExtensions = true
    * - noLib = true
    * - noResolve = true
    */
    function transpileTs(input, transpileOptions) {
      const diagnostics = []

      const options = transpileOptions.compilerOptions
                      // ? fixupCompilerOptions(transpileOptions.compilerOptions, diagnostics)
                      || DEFAULT_COMPILER_OPTIONS

      // options.isolatedModules = true

      // transpileModule does not write anything to disk so there is no need to verify that there are no conflicts between input and output paths.
      options.suppressOutputPathCheck = true

      // Filename can be non-ts file.
      options.allowNonTsExtensions = true

      // We are not returning a sourceFile for lib file when asked by the program,
      // so pass --noLib to avoid reporting a file not found error.
      options.noLib = true

      // Clear out other settings that would not be used in transpiling this module
      options.lib = undefined
      options.types = undefined
      options.noEmit = undefined
      options.noEmitOnError = undefined
      options.paths = undefined
      options.rootDirs = undefined
      options.declaration = undefined
      options.declarationDir = undefined
      options.out = undefined
      options.outFile = undefined

      // We are not doing a full typecheck, we are not resolving the whole context,
      // so pass --noResolve to avoid reporting missing file errors.
      options.noResolve = true

      // if jsx is specified then treat file as .tsx
      const inputFileName = transpileOptions.fileName || (options.jsx ? "module.tsx" : "module.ts")
      const sourceFile = ts.createSourceFile(inputFileName, input, options.target)
      if (transpileOptions.moduleName) {
          sourceFile.moduleName = transpileOptions.moduleName
      }

      // if (transpileOptions.renamedDependencies) {
      //     sourceFile.renamedDependencies = ts.createMap(transpileOptions.renamedDependencies)
      // }

      const newLine = require('os').EOL

      // Output
      let outputText
      let sourceMapText

      // Create a compilerHost object to allow the compiler to read and write files
      const compilerHost = {
          getSourceFile: (fileName, target) => fileName === require('path').normalize(inputFileName) ? sourceFile : undefined,
          writeFile: (name, text, writeByteOrderMark) => {
              const extMap = '.map'
              if (name.length > extMap.length && name.endsWith(extMap)) {
                  Debug.assert(sourceMapText === undefined, `Unexpected multiple source map outputs for the file '${name}'`);
                  sourceMapText = text;
              }
              else {
                  if (outputText !== undefined) {
                    throw new Error(`Unexpected multiple outputs for the file: '${name}'`)
                  }
                  outputText = text
              }
          },
          getDefaultLibFileName: () => "lib.d.ts",
          useCaseSensitiveFileNames: () => false,
          getCanonicalFileName: fileName => fileName,
          getCurrentDirectory: () => "",
          getNewLine: () => newLine,
          fileExists: (fileName) => fileName === inputFileName,
          readFile: (fileName) => "",
          directoryExists: directoryExists => true,
          getDirectories: (path) => []
      };

      const program = ts.createProgram([inputFileName], options, compilerHost);

      if (transpileOptions.reportDiagnostics) {
          diagnostics.push.apply(diagnostics, program.getSyntacticDiagnostics(sourceFile))
          diagnostics.push.apply(diagnostics, program.getOptionsDiagnostics())
          diagnostics.push.apply(diagnostics, program.getSemanticDiagnostics())
      }
      // Emit
      program.emit();

      if (outputText === undefined) {
        throw new Error("Output generation failed")
      }

      return { outputText, diagnostics, sourceMapText };
  }

  function pureTypeScript(module, fileName) {
    var content = fs.readFileSync(fileName, 'utf8')
    // console.log(content)

    const compilerOptions = Object.assign({}
      , DEFAULT_COMPILER_OPTIONS
      , {
      // TODO: --dev & --prod settings switcher
    })
    // const reportDiagnostics = true

    const output = transpileTs(content, {
        fileName
      , compilerOptions
      , reportDiagnostics: true
    })
    console.log(output)

    if (output.diagnostics.length > 0) {
        throw new Error(`Syntax error in ${fileName}: ${output.diagnostics[0].messageText}`)
    }

    module._compile(output.outputText, fileName)
  }

  require.extensions['.ts'] = pureTypeScript

  module.exports = pureTypeScript.default = pureTypeScript.pureTypeScript = pureTypeScript

})()
