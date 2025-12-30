import { defineConfig } from 'vitepress'
import Tailwind from '@tailwindcss/vite'

export default defineConfig({
  title: "Avesbox",
  description: "The Flutter & Dart ecosystem",
  head: [
    ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/logo-32x32.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/logo-16x16.png"}],
    ['meta', { property: 'og:title', content: 'The Flutter & Dart ecosystem'}],
    ['meta', { name: 'description', content: 'The Flutter & Dart ecosystem'}],
    ['meta', { property: 'og:description', content: 'The Flutter & Dart ecosystem'}],
  ],
  lastUpdated: true,
  appearance: {
    initialValue: undefined
  },
  themeConfig: {
    footer: undefined,
    logo: '/logo.png',
    search: undefined,
    nav: [
      { text: 'Blog', link: '/blog/' },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/avesbox' },
      { icon: 'x', link: 'https://x.com/avesboxx' },
      { icon: 'discord', link: 'https://discord.gg/zydgnJ3ksJ' },
      { icon: 'youtube', link: 'https://www.youtube.com/@avesbox' }
    ]
  },
  vite: {
    plugins: [Tailwind()]
  }
})
