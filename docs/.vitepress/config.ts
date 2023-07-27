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
        text: '收藏',
        items: [
          {text: 'C++', link: '/notes/coding/c++/favor'}
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
