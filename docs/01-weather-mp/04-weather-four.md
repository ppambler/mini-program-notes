---
title: 01-小程序开发环境搭建
typora-copy-images-to: img\04
---

# 实战篇 1：小程序开发环境搭建







## ★Q&A

### ①Gulp？

它是干嘛的？

> 用自动化构建工具增强你的工作流程，即 gulp 将开发流程中**让人痛苦或耗时的任务自动化**，从而**减少你所浪费的时间、创造更大价值**。

快速入门：

1. 安装 gulp 命令行工具

```bash
yarn global add gulp-cli
```

2. 进入xxx项目，`yarn init`
3. 安装 gulp，作为开发时依赖项

```bash
yarn add gulp --dev
```

4. 检查 gulp 版本

```bash
gulp -v
```

5. 在项目的根目录下创建一个名为 `gulpfile.js` 的文件，并在文件中输入以下内容：

```js
function defaultTask(cb) {
  // place code for your default task here
  cb();
  //console.log(1)
}

exports.default = defaultTask
```

6. 测试，在项目根目录下执行 gulp 命令： `gulp`。如需运行多个任务（task），可以执行 `gulp <task> <othertask>`。
7. 输出结果。默认任务（task）将执行，因为任务为空，因此没有实际动作。

**➹：**[快速入门 · gulp.js 中文文档](https://www.gulpjs.com.cn/docs/getting-started/quick-start/)

**➹：**[从 npm 迁移 | Yarn](https://yarnpkg.com/lang/zh-hans/docs/migrating-from-npm/)

**➹：**[Gulp：任务自动管理工具 -- JavaScript 标准参考教程（alpha）](https://javascript.ruanyifeng.com/tool/gulp.html)

### ②递归创建目录？

有两种姿势：

```bash
mkdir -p d/a/b/c
npx mkdirp src/test/a/b/v
```

有了npx，不需要我们在本地安装`mkdirp`这个包了，因为npx可以远程使用包，不过就是太慢了！

关于 `mkdirp`这个包：
该包只提供一个方法：`mkdirp(pathName, function(err){})`

```js
const mkdirp = require('mkdirp');
mkdirp('./tmp/foo/bar/baz', function (err) { // 在当前目录下创建多级文件夹
  console.log(err);
});
```

**➹：**[Node模块--mkdirp - 个人文章 - SegmentFault 思否](https://segmentfault.com/a/1190000011832060)

