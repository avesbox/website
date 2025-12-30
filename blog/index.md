---
title: Avesbox Blog
layout: page
sidebar: false
editLink: false
search: false
head:
    - - meta
      - property: 'og:title'
        content: Blog - Avesbox

    - - meta
      - name: 'description'
        content: Updates and release notes of Avesbox

    - - meta
      - property: 'og:description'
        content: Updates and release notes of Avesbox
---

<script setup>
    import Blog from '../components/blog.vue'
    import { posts } from '../data/blog.ts'
</script>

<Blog
	:posts="posts"
/>
