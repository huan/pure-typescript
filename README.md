# pure-typescript
Pure Typescript Loader for running typescript death easy as javascript

# Under Construction...

Please come back later if you are interesting Pupre-Typescript project.

# Goal

1. TypeScript be treated as First Class Language 
1. Support Pure TypeScript modules/library in node_moduels(done by [#1](https://github.com/zixia/pure-typescript/issues/1)
2. Zero Configuration in Server(in progress)
2. One Line Configuration in Browser(TBD [#2](https://github.com/zixia/pure-typescript/issues/2))

# Requirement

Those requirements are little bleeding edge because I believe pure typescript developers would love them.(I am)

1. NodeJS v6 or above
1. TypeScript v2 or above 

# Why Pure TypeScript?

I love typescript(because of angular 2), and I switched all my javascript code to typescript now,
including my server components.

I also would like to write pure typescript npm modules,
which I think there is no need to compile to javascript any more,
because my environment is a `full typescript stack`,
compile should only be ran at the final executation step.

There also many developers have the same idea as me.(see: The PAINs of Pure TypeScript Developer) 

But there's no such a tool for us to run typescript smoothly for our need. for example:

1. `ts-node` don't support load pure typescript library/module in node_modules directory
2. `tsconfig.json` is a too complicated
3. `typings.json` is too complicated
4. `index.d.ts` is too complicated
5. default file extension should be `.ts`, and should be the first dependencies file extention
5. run typescript in browser needs a lot of configuration(too complicated)

I believe that run typescript should be put at first class, 
and be ran as easy as `node` in server, or `javascript` in browser,
without any more complicated configures.
this is the reason I decided to write this new tool `pure-typescript` 
to make pure-typescript developers more happy.

# The PAINs of Pure Typescript Developer

* [Can't have a "pure" typescript library.](https://github.com/Microsoft/TypeScript/issues/5225#issuecomment-147492261)
* [Fail to load pure typescript module from node_moules](https://github.com/TypeStrong/ts-node/issues/155)
* [ts-node cannot import pure typescript npm module inside node_modules directory](https://github.com/TypeStrong/ts-node/issues/158)

# Usage

## Server

Just replace `node` by `ts`

```shell
$ npm install pure-typescript

$ ts main.ts
```

## Browser

Just include pure-typescript in html head

```html
<script src='//unpkg.com/pure-typescript'></script>
<script>
  var tsMain = PureTypeScript('main.ts')
</script>
```

# Best Practice

1. Add keywords: `pure-typescript` in package.json
1. For Pure Typescript NPM Module, set main: `index.ts` in package.json

# Reference

* [The Node.js Way - How `require()` Actually Works](http://fredkschott.com/post/2014/06/require-and-the-module-system/)
* [Executing JS Code in a Sandbox With Node's VM Module](https://60devs.com/executing-js-code-with-nodes-vm-module.html)

# Version History

## v0.0.3 (master)
1. run `purets` like node: `purets pure-typescript-file.ts`
1. support load pure typescript module in `node_modules` directory
2. publish npm module: pure-typescript
1. proxy right argv to ts program

# Known Issues & Support
Github Issue - https://github.com/zixia/pure-typescript/issues

# Todo List

[ ] Enable TypeScript in Browser by `script src=//unpkg.com/pure-typescript`,
without any other configuration(like SystemJS?)
[ ] Cache management for large project to speed up startup loading time

# Reference
1. [Using the TypeScript Compiler API](https://github.com/Microsoft/TypeScript/wiki/Using-the-Compiler-API)

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
