# pure-typescript
Pure Typescript Loader with Module/Library support and No Compile Needed

**DO NOT USE ME IN PRODUCTION(YET)**
**BECAUSE I AM UNDER HEAVY DEVELOPMENT NOW**

# Why Pure TypeScript?

I love typescript(because of angular 2), and I switched all my javascript code to typescript now, including my server components.

I also would like to write pure typescript npm modules, which I think is no need to compile to javascript any more, because my environment is a `full typescript stack`.

But there's no such a tool for me to run typescript smoothly for my need. for example:

1. `ts-node` don't support load pure typescript library/module in node_modules directory
2. `tsconfig.json` is a too complicated
3. `typings.json` is too complicated
4. `index.d.ts` is too complicated
5. set default file extension to `.ts`
5. run typescript in browser needs a lot of configuration(too complicated)
1. `.ts` is not the first dependencies file extention search 1st order

I believe that run typescript should as easy as run `node` in server, or `javascript` in browser, this is the reason I decided to write a new tool to solve those problems.

# Goal

1. Support Pure TypeScript modules/library in node_moduels
2. Run typescript as Zero-Configuration
2. One Line Configuration in browser to run Pure TypeScript directly

# The PAIN of Pure Typescript Developer

* [Can't have a "pure" typescript library.](https://github.com/Microsoft/TypeScript/issues/5225#issuecomment-147492261)
* [Fail to load pure typescript module from node_moules](https://github.com/TypeStrong/ts-node/issues/155)
* [ts-node cannot import pure typescript npm module inside node_modules directory](https://github.com/TypeStrong/ts-node/issues/158)

# Usage

```shell
$ purets server.ts
```

# Best Practice

1. Add keywords: `pure-typescript` in package.json
1. For Pure Typescript NPM Module, set main: `index.ts` in package.json

# Reference

* [The Node.js Way - How `require()` Actually Works](http://fredkschott.com/post/2014/06/require-and-the-module-system/)
* [Executing JS Code in a Sandbox With Node's VM Module](https://60devs.com/executing-js-code-with-nodes-vm-module.html)

# Version History

## v0.0.1 (master)
1. run `purets` like node: `purets pure-typescript-file.ts`
2. publish npm module: pure-typescript

# Known Issues & Support
Github Issue - https://github.com/zixia/wechaty/issues

Author
-----------------
Zhuohuan LI <zixia@zixia.net> (http://linkedin.com/in/zixia)

<a href="http://stackoverflow.com/users/1123955/zixia">
  <img src="http://stackoverflow.com/users/flair/1123955.png" width="208" height="58" alt="profile for zixia at Stack Overflow, Q&amp;A for professional and enthusiast programmers" title="profile for zixia at Stack Overflow, Q&amp;A for professional and enthusiast programmers">
</a>

Copyright & License
-------------------
* Code & Docs 2016© zixia
* Code released under the ISC license
* Docs released under Creative Commons

[downloads-image]: http://img.shields.io/npm/dm/pure-typescript.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/pure-typescript
