---
title: 小程序 云开发基础知识
typora-copy-images-to: img\02
---



# 基础篇 2：小程序·云开发基础知识

## ★如何搞个云开发模式出来？

1. 在开发界面里边，点击「云开发」这个按钮
2. 根据提示，配置「环境名称」和「环境ID」
3. 你的小程序要想调用云开发，那么你此之前，你需要先调用 `wx.cloud.init` 对云开发进行初始化：

```js
wx.cloud.init({
  env: 'tianqi-xxx'
})
```

这个 JS 代码 在 `app.js` 里边写上即可！

4. 如何确保云开发初始化成功呢？——在云开发控制台里边，你点开「用户访问」会看到一些比如「今日活跃用户」为1人，那么你看到这个就是初始化成功了。当然，你可以打开「调试器」，会看到「云开发 wx.cloud.init 环境初始化」这样的字眼也是成功的标志！

## ★如何创建一个云函数？

1. 到 `project.config.json`里边新增一个字段：

```json
{
   "cloudfunctionRoot": "./functions/"
}
```

2. 在根目录下创建一个叫 `functions`的目录，此时它会有个云图标标志
3. 右击 `functions`目录，选择新建 Node.js 云函数，随便输入一个 名字，如 `add`
4. 在 `add`目录里边的 `index.js`里边搞下边这样的代码，这样我们一个有一定功能的函数就出来了！

```js
// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  return {
    sum: event.a + event.b
  }
}
```

5. 使用这个云函数（直接在app.js里边测试就好了）：

```js
wx.cloud.callFunction({
  // 云函数名称
  name: 'add',
  // 传给云函数的参数
  data: {
    a: 1,
    b: 2,
  },
  success: function (res) {
    console.log(res.result.sum) // 3
  },
  fail: console.error
})
```

6. 保存文件，打开调试器，即可看到有个 `3`log出来了！

::: warning

每次更新云函数的 `index.js`文件，保存后，都得右击该文件，选择「云函数增量上传：更行文件」，这样本地使用的时候，才会是最新版的云函数！

:::



## ★Q&A

### ①SDK和API的区别？

缘由：第一次创建云函数时，然后创建成功后，工具会提示是否立即本地安装依赖，确定后工具会自动安装 [`wx-server-sdk`](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/guide/functions/wx-server-sdk.html)。

直接理解：

- SDK（Software Development Kit，软件开发工具包）＝放着你想要的软件功能的软件包；API＝SDK上唯一的接口
- SDK 是可以下载的。API 是写在文档里的。

白话理解：

有一杯密封饮料，它的名字叫做“SDK”。

饮料上插着吸管，吸管的名字叫“API”。

把你叫做“XX系统”。

如果你想喝到SDK里的饮料（让系统拥有SDK中的功能），你必须通过API这根吸管来实现（通过API连接你的系统和SDK工具包），否则你就喝不到饮料。

自己理解：

不想写xxx功能？

有个SDK里边有放着一份xxx功能，你想使用它吗？——那你就学会使用它提供的API吧！

::: warning

辅助开发某一类软件的**相关文档、范例和工具的集合**都可以叫做SDK。

SDK被开发出来是为了减少程序员工作量的。

:::

所以，我第一次创建云函数的时候，工具自动帮我下载了个SDK（叫wx-server-sdk），通过这个SDK，自动帮我创建了一个云函数模板！

**➹：**[SDK和API的区别？ - 知乎](https://www.zhihu.com/question/21691705)




  