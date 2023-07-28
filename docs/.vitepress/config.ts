import { defineConfig } from 'vitepress'

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
        text: '人工智能',
        items: [
          {text: '机器学习', link: '/notes/artificial intelligence/machine learning'},
          {text: '深度学习', link: '/notes/artificial intelligence/deep learning'},
          {text: '大语言模型', link: '/notes/artificial intelligence/deep learning'},
          {text: '应用', items: [
            {text: '推荐系统', link: ''}
          ]},
        ]
      },
      {
        text: '收藏',
        items: [
          {text: '人工智能', link: '/notes/artificial intelligence/favor'},
          {text: '机器学习', link: '/notes/artificial intelligence/applications/recommend system/favor'},
          {text: '虚拟化', link: '/notes/computer science/virtualization technology/favor'},
          {text: '编程基础', items: [
            {text: 'C++', link: '/notes/basic programming/c++/favor'}
          ]}
        ]
      },
      {
        text: '研习录',
        items: [
          {text: '索引', link: '/notes/study record/list'}
        ]
      },
      {
        text: '外部链接',
        items: [
          { text: '灵犀', link: 'https://exploring.fun' },
          { text: '博客', link: 'https://wii.pub' },
          { text: 'github', link: 'https://github.com/sunzhenkai' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/sunzhenkai/talking-ground' }
    ],

    footer: {
      message: '+',
    }
  }
})
