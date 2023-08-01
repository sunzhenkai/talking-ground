import { defineConfig } from 'vitepress'

var links = {
  text: '链接',
  items: [
    { text: '灵犀', link: 'https://exploring.fun' },
    { text: '博客', link: 'https://wii.pub' },
    { text: 'github', link: 'https://github.com/sunzhenkai' }
  ]
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Wii's talking ground",
  description: " ",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: [
      {
        text: '我',
        collapsed: false,
        items: [
          {
            text: '关于'
          },
          {
            text: '经历'
          },
          {
            ...links,
            collapsed: true
          }
        ]
      },
      {
        text: '折腾日记',
        collapsed: false,
        items: [
          {
            text: '黑苹果',
            link: '/notes/play/os x/black apple',
            collapsed: true,
            items: [
              { text: '安装', link: './install' },
            ]
          },
          {
            text: '树莓派',
            link: '/notes/play/rpi/config',
            collapsed: true,
            items: [
              { text: 'gpio', link: './gpio' },
              { text: '库', link: './librarys' },
              { text: '硬件', link: './hardware' },
              { text: '连接游戏手柄', link: './gamepad' },
            ]
          },
          {
            text: '路由器',
            collapsed: true,
            items: [
              { text: '华硕', link: 'notes/play/router/ausu' },
              { text: 'Netgear', link: 'notes/play/router/netgear' },
              { text: 'Openwrt', link: 'notes/play/router/openwrt' },
              { text: '软路由', link: 'notes/play/router/soft-router' },
            ]
          },
          {
            text: 'All In One',
            collapsed: true,
            items: [
              {
                text: 'Unraid', link: '/notes/play/unraid/usage', collapsed: true, items: [
                  {
                    text: 'docker',
                    link: './dockers'
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        text: '计算机科学',
        items: [
          {
            text: '操作系统',
            collapsed: true,
            items: []
          },
          {
            text: '网络',
            collapsed: true,
            items: []
          },
          {
            text: '软件工程',
            collapsed: true,
            items: []
          },
          {
            text: '编译原理',
            collapsed: true,
            items: []
          },
          {
            text: '大数据',
            collapsed: true,
            items: []
          },
          {
            text: '云计算',
            collapsed: true,
            items: []
          },
          {
            text: '虚拟化',
            collapsed: true,
            items: []
          },
          {
            text: '工程架构',
            collapsed: true,
            items: []
          },
          {
            text: '前端技术',
            collapsed: true,
            items: []
          },
          {
            text: '搜索引擎',
            collapsed: true,
            items: []
          },
          {
            text: '密码学',
            collapsed: true,
            items: []
          }
        ]
      },
      {
        text: '编程基础',
        items: [
          {
            text: '设计模式',
            collapsed: true,
            items: []
          },
          {
            text: '数据结构',
            collapsed: true,
            items: []
          },
          {
            text: '编程算法',
            collapsed: true,
            items: []
          },
          {
            text: '语言',
            collapsed: true,
            items: [
              { text: 'C++', link: '/notes/basic programming/c++/notes/basic' }
            ]
          }
        ]
      },
      {
        text: '人工智能',
        items: [
          {
            text: '机器学习',
            link: '/notes/artificial intelligence/machine learning/notes/startup'
          },
          {
            text: '深度学习',
            link: '/notes/artificial intelligence/deep learning/notes/startup'
          },
          {
            text: '大语言模型',
            link: '/notes/artificial intelligence/large language model/startup',
            collapsed: true,
            items: [
              { text: '小试', link: './take' }
            ]
          },
          {
            text: '应用', collapsed: true, items: [
              { text: '推荐系统', link: '' }
            ]
          },
        ]
      },
      {
        text: '研习录',
        items: [
          { text: '索引', link: '/notes/study record/list' }
        ]
      },
      {
        text: '收藏',
        items: [
          { text: '人工智能', link: '/notes/artificial intelligence/favor' },
          { text: '机器学习', link: '/notes/artificial intelligence/applications/recommend system/favor' },
          { text: '虚拟化', link: '/notes/computer science/virtualization technology/favor' },
          {
            text: '编程基础', collapsed: true, items: [
              { text: 'C++', link: '/notes/basic programming/c++/favor' }
            ]
          },
          {
            text: '工具',
            collapsed: true,
            link: '/notes/tools/favor',
            items: [
              {
                text: 'vitepress',
                link: 'https://vitepress.dev/'
              }
            ]
          }
        ]
      },
      links
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/sunzhenkai/talking-ground' }
    ],

    footer: {
      message: '+',
    }
  }
})
