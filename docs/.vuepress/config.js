const path = require('path')
module.exports = {
  base: '/mini-program/',
  title: '☀️ 小程序',
  description: '小程序学习记录',
  head: [
    ['link', { rel: 'icon', href: '//avatars3.githubusercontent.com/u/36479648?s=40&v=4' }],
  ],
  dest: './docs-dist',
  themeConfig: {
    lastUpdated: 'Last Updated',
    nav: [
      { text: '主页', link: '/' },
      { text: '天气小程序', link: '/01-weather-mp/' },
      { text: 'GitHub', link: 'https://github.com/ppambler/mini-program' },
    ],
    sidebar: [
      {
        title: '天气小程序',   // 必要的
        path: '/01-weather-mp/',      // 可选的, 应该是一个绝对路径
        collapsable: true, // 可选的, 默认值是 true,
        sidebarDepth: 2,    // 可选的, 默认值是 1
        children: [
          {
            title: '基础篇',
            sidebarDepth: 2,
            children: [
              '/01-weather-mp/01-weather-one',
              '/01-weather-mp/02-weather-two',
              '/01-weather-mp/03-weather-three',
            ]
          },
          {
            title: '实战篇',
            sidebarDepth: 2,
            children: [
              '/01-weather-mp/04-weather-four',
            ]
          }
        ]
      }
    ],
  },
  markdown: {
    lineNumbers: true,
    // markdown-it-anchor 的选项
    anchor: { permalink: false },
    // markdown-it-toc 的选项
    toc: { includeLevel: [1, 2] },
    // markdown-it-checkbox 的选项
    checkbox: {
      disabled: true,
      divWrap: false,
      divClass: 'checkbox',
      idPrefix: 'cbx_',
      ulClass: 'task-list',
      liClass: 'task-list-item'
    },
    extendMarkdown: md => {
      // 使用更多的 markdown-it 插件!
      md.use(require('markdown-it-task-checkbox'))
    }
  },
}