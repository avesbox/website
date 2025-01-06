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
</script>

<Blog
	:posts="[
		{
			title: 'Avesbox - Unleash the power of Dart on the backend',
			src: '/blog/unleash_the_power/unleash_the_power.webp',
			alt: 'Unleash the power of Dart on the backend',
			date: '11 Nov 2024',
			href: '/blog/unleash_the_power',
      author: 'Francesco Vallone'
		},
    {
			title: 'Avesbox - Unleash the power of Dart on the backend',
			src: '/blog/unleash_the_power/unleash_the_power.webp',
			alt: 'Unleash the power of Dart on the backend',
			date: '11 Nov 2024',
			href: '/blog/unleash_the_power',
      author: 'Francesco Vallone'
		},
	]"
/>
