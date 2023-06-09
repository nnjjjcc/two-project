import { NodeType } from "@yangzw/bruce-us/dist/node.js";

console.log(NodeType());
//__dirname：表示当前模块的目录的绝对路径。
//__filename：表示当前模块的文件名的绝对路径。
//require()：用于从其他模块加载函数、对象或原始数据。它返回被加载模块的导出对象。
//module：表示当前模块的信息和导出对象
//exports：是一个指向 module.exports 的引用
//------
//__filename与__dirname可用import.meta对象重建
//require、module和exports可用import与export代替
//json文件的引用可用Fs模块的readFileSync与JSON.parse()代替
//----
// import { readFileSync } from "fs";
// import { dirname } from "path";
// import { fileURLToPath } from "url";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);
// console.log(__filename, __dirname);

// const json = readFileSync("./info.json");
// const info = JSON.parse(json);
//同时使用require与export/import会报错
//可用babel将代码从ESM转换为CJS
//-----
//这四个babel子包很重要，Node能不能支持ESM的解析就看它们了。
// @babel/cli：提供支持@babel/core的命令运行环境
//  @babel/core：提供转译函数
//  @babel/node：提供支持ESM的命令运行环境
//  @babel/preset-env：提供预设语法转换集成环境
//nodemon是一个自动检测项目文件发生变化就重启服务的Npm模块
//修改src/index.js内容，nodemon就能快速响应改动并重启命令。nodemon配置可查看Nodemon官网，在此不深入讲述了。
