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
          {text: '应用', link: '/notes/artificial intelligence/applications'},
        ]
      },
      {
        text: '收藏',
        items: [
          {text: '人工智能', link: '/notes/artificial intelligence/favor'},
          {text: 'C++', link: '/notes/basic programming/c++/favor'}
        ]
      },
      {
        text: '链接',
        items: [
          { text: '灵犀', link: 'https://exploring.fun' }
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
