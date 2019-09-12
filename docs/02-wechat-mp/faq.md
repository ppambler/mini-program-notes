# FAQ

## ★常识性知识点

> 必须要记住哈！

- 上传本地开发小程序的过程到github里边去的话，你最好把仓库搞成是私有的，毕竟这里边有一些敏感信息，如小程序的appid等……
- 如果出现页面未注册的报错信息，那么就是你[页面](https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/page.html)的`index.js`里边没有 `Page({……})`这样的东东
- 页面配置文件（[page.json](https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/page.html)，即 index.json），里边必须要写上内容，如果是页面，那就写上这个：

```json
{
  "usingComponents": {}
}
```

如果是组件，那就得声明自己是个组件：

```json
{
  "component": true
}
```

其常见的字段：

| 字段名                  | 默认值 | 描述                       |
| ----------------------- | ------ | -------------------------- |
| `enablePullDownRefresh` | false  | 是否开启当前页面下拉刷新。 |
|                         |        |                            |
|                         |        |                            |

