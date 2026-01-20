---
title: 'Canary - Bring your Dart snippets to life'
sidebar: false
editLink: false
search: false
head:
    - - meta
      - property: 'og:title'
        content: 'Canary - Bring your Dart snippets to life'

    - - meta
      - name: 'description'
        content: 'Learn how Canary can help you bring your Dart snippets to life.'

    - - meta
      - property: 'og:description'
        content: 'Learn how Canary can help you bring your Dart snippets to life.'
    - - meta
      - property: 'og:image'
        content: https://avesbox.com/blog/canary_presentation/canary_presentation.webp

    - - meta
      - property: 'twitter:image'
        content: https://avesbox.app/blog/canary_presentation/canary_presentation.webp
---
<script setup>
	import BlogPage from '../components/blog_page.vue'
</script>

<BlogPage
	title="Canary - Bring your Dart snippets to life"
	src="/blog/canary_presentation/canary_presentation.webp"
	alt="Canary - Bring your Dart snippets to life"
	author="Francesco Vallone"
	date="20 Jan 2026"
	shadow
	brand="canary"
>

Documentation should be more than just text on a page, it should be an experience. For TypeScript developers, Twoslash transformed how we read code in blog posts and docs, turning static blocks into interactive playgrounds.

Today, we are bringing that same magic to the Dart ecosystem.

I am thrilled to announce the release of <a href="https://www.npmjs.com/package/@avesbox/canary" target="_blank" rel="noopener noreferrer">@avesbox/canary</a>, a Shiki transformer that brings static analysis, type information, and error checking directly to your Dart markdown code blocks.

## Why Canary?

If you are writing documentation for Flutter or Dart, you know the struggle. You paste a code snippet, but you lose all the rich context your IDE provides. Readers have to guess what type a variable is or trust that a function exists.

**Canary changes that**. It runs your Dart code snippets through a real analysis process during your build, extracting type information to render them beautifully in your static site.

Here is an example in Serinus website:

<img src="/blog/canary_presentation/serinus_canary.png" alt="Canary Example" class="my-6 rounded-lg shadow-lg" />

## Key Features

- **Type Hovers**: Readers can hover over variables and functions to see their types, just like in an IDE.
- **Seamless Integration**: Built as a Shiki transformer, Canary integrates effortlessly with VitePress and other static site generators that use Shiki.
- **Dart Support**: Specifically designed for Dart, ensuring accurate type analysis and rendering.
- **Zero-Runtime Overhead**: All processing happens at build time, so your site remains fast and lightweight.

## Getting Started

To get started with Canary on VitePress, follow these steps:

### Install the package

```bash
npm install @avesbox/canary
```

### Configure your VitePress site

```js
import { defineConfig } from 'vitepress';
import { canaryTransformer } from '@avesbox/canary';

export default defineConfig({
  markdown: {
	codeTransformers: [
		canaryTransformer(),
	],
  },
});
```

## Seeing is Believing

To see Canary in action, check out the [Serinus Site](https://serinus.app). It uses Canary to enhance its Dart code snippets, providing an interactive and informative experience for readers.

## The future of Dart Documentation

Canary is just the beginning. We envision a future where Dart documentation is as dynamic and interactive as the code itself. With tools like Canary, we can make learning and exploring Dart more engaging than ever before.

Don't just show code, make it come alive with Canary!


## Social

If you want to stay updated on the project, you can follow Avesbox on [X](https://x.com/avesboxx) and [GitHub](https://github.com/avesbox).

Stay tuned for more updates and releases! 🐤

</BlogPage>
