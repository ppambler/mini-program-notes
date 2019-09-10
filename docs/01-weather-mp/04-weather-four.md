---
title: 01-小程序开发环境搭建
typora-copy-images-to: img\04
---

# 实战篇 1：小程序开发环境搭建

> 这一节我是怎么看的？——把这个[小程序项目](https://github.com/ksky521/fresh-weather)跑起来，然后看看Gulp这个构建工具是怎么搞事情的！
>
> 使用原生姿势开发小程序，没有用到**Taro**（熟悉React）、**mpvue**（熟悉Vue.js）这样的小程序开发框架。
>
> 我们本地开发主要关注的是 `client`目录，而`dist`目录则是作为项目导入到微信开发者工具里边的！









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

### ③ `.prettierrc`是个啥文件？

> prettier是一款固执己见（顽固坚持自己的意见。）的代码格式化工具，它几乎移除了编辑器本身所有的对代码的操作格式，然后重新显示。就是为了让所有用这套规则的人有完全相同的代码。**在团队协作开发的时候更是体现出它的优势**。与eslint，tslint等各种格式化工具不同的是，prettier只关心代码格式化，而不关心语法问题。

使用该文件意味着，不需要在vscode 里边安装该插件了。

**➹：**[Prettier · Opinionated Code Formatter](https://prettier.io/)

**➹：**[感受一下神奇的 Prettier](https://blog.feddy.org/prettier-tutorial/)

**➹：**[超人气代码格式化工具prettier - 掘金](https://juejin.im/post/5cc58039f265da03775c5a6f)

**➹：**[.Prettierrc文件的设置 - 掘金](https://juejin.im/post/5a7d70496fb9a063317c47f1)

**➹：**[.prettierrc文件常见配置 - onlyliii的博客 - CSDN博客](https://blog.csdn.net/onlyliii/article/details/89312857)

### ④ `rc`后缀为何意？

**run commands** 之意。说白了这个文件里边的内容是要被运行的。

**➹：**[linux - What does the 'rc' in `.bashrc`, etc. mean? - Super User](https://superuser.com/questions/173165/what-does-the-rc-in-bashrc-etc-mean)

### ⑤ `.editorconfig`？

> 该文件是不是有点多余？因为我用了 `.prettierrc`

它是什么？

> 官网说：`editorconfig`帮助开发人员在不同的编辑器和ide之间定义和维护一致的编码风格。

**总之，简单来说就是跨编辑器使用同一份代码缩进等配置**

不过，要让该文件生效的话，需要安装「EditorConfig for VS Code」插件。而webstorm就不需要了，因为它内置了，所以你在切换到IDE开发时就不需要安装该插件了，而在vscode里边，就得需要安装！

**➹：**[★项目代码规范工作流——editor、prettier、eslint、git-check | Jsonz1993](https://jsonz1993.github.io/2018/03/%E9%A1%B9%E7%9B%AE%E4%BB%A3%E7%A0%81%E8%A7%84%E8%8C%83%E5%B7%A5%E4%BD%9C%E6%B5%81%E2%80%94%E2%80%94editor%E3%80%81prettier%E3%80%81eslint%E3%80%81git-check/)

**➹：**[快速用上 editorconfig 来规范编辑 - 掘金](https://juejin.im/post/5b9cba4c6fb9a05cf67a79a4)

**➹：**[【译】EditorConfig 介绍 | AlloyTeam](http://www.alloyteam.com/2014/12/editor-config/)

**➹：**[★前端综合能力系列之EditorConfig - 掘金](https://juejin.im/post/5ad05a085188257cc20db392)

### ⑥ `.wxs`是个怎样的文件？

WXS（WeiXin Script）是小程序的一套脚本语言，结合 `WXML`，可以构建出页面的结构。

WXS 与 JavaScript 是不同的语言，**有自己的语法，并不和 JavaScript 一致**。

**➹：**[WXS 语法参考 | 微信开放文档](https://developers.weixin.qq.com/miniprogram/dev/reference/wxs/)

### ⑦WebFont？

WebFont 技术可以让网页使用在线字体

通过 CSS 的 `@font-face` 语句引入在线字体，使用 CSS 选择器指定运用字体的文本

**➹：**[迟到的中文 WebFont - w3ctech](https://www.w3ctech.com/topic/669)

**➹：**[特色功能-有字库](https://www.webfont.com/introduce/index.html)

**➹：**[★网页字体优化  |  Web Fundamentals  |  Google Developers](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/webfont-optimization?hl=zh-cn)

**➹：**[itgalaxy/webfont: Awesome generator of webfont](https://github.com/itgalaxy/webfont)

**➹：**[★Iconfont-webfont平台](https://www.iconfont.cn/webfont?spm=a313x.7781069.1998910419.d81ec59f2#!/webfont/index)

