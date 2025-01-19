import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Avesbox",
  description: "The Flutter & Dart ecosystem",
  head: [
    ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/logo-32x32.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/logo-16x16.png"}],
    ['meta', { property: 'og:title', content: 'The Flutter & Dart ecosystem'}],
    ['meta', { name: 'description', content: 'Flutter & Dart convenience toolbox'}],
    ['meta', { property: 'og:description', content: 'Flutter & Dart convenience toolbox'}],
  ],
  lastUpdated: true,
  appearance: false,
  themeConfig: {
    footer: {
      copyright: 'Copyright © 2025 Avesbox',
      message: 'Built with 💙 by <a href="https://github.com/avesbox">Avesbox</a>'
    },
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.png',
    search: {
      provider: 'local'
    },
    
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Blog', link: '/blog/' },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/avesbox' },
      { icon: 'x', link: 'https://x.com/avesboxx' },
      { icon: 'discord', link: 'https://discord.gg/zydgnJ3ksJ' },
      { icon: 'youtube', link: 'https://www.youtube.com/@avesbox' }
    ]
  }
})
