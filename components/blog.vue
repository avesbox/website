<script setup>
import { authors } from './authors';

const props = defineProps({
    posts: Array
})

</script>

<template>

	<div>
		<header class="flex flex-col justify-center items-center max-w-7xl gap-3 w-full mx-auto pt-20 pb-4">
			<h1 class="text-5xl font-bold">
				Blog
			</h1>
		</header>
		<main class="lg:grid flex flex-col max-w-7xl mx-auto gap-4 w-full my-4 grid-cols-2">
			<div v-for="(post, index) in props.posts"
				class="p-4 rounded-lg transition-all"
				:class="index === 0 ? ['col-span-2', 'row-span-1'] : ['col-span-1', 'row-span-1']"
				:key="post.date + post.href">
				<article v-if="index === 0" class="grid grid-cols-2 gap-2 items-center">
					<div class="flex flex-col gap-4 p-8">
						<h3 class="text-sm text-slate-600"> {{ post.date }}</h3>
						<a :href="post.href" class="text-3xl font-semibold">
							{{ post.title }}
						</a>
						<img
							class="w-9 h-9 rounded-full"
							:src='"/blog/authors/" + authors[post.author].src'
							:alt="post.author"
						/>
					</div>
					<a :href="post.href" :style="'background-image: url('+post.src+')'" class="rounded-lg w-full h-72 bg-cover bg-center" />
				</article>
				<article v-if="index > 0" class="flex flex-col gap-4 p-8">
					<a :href="post.href" class="rounded-lg w-full h-48 bg-cover bg-center" :style="'background-image: url('+post.src+')'"/>
					<div class="flex flex-col gap-2">
						<h3 class="text-sm text-slate-600"> {{ post.date }}</h3>
						<a :href="post.href" class="text-2xl font-semibold">
							{{ post.title }}
						</a>
						<img
							class="w-9 h-9 rounded-full"
							:src='"/blog/authors/" + authors[post.author].src'
							:alt="post.author"
						/>
					</div>
				</article>
			</div>
		</main>
	</div>
    
</template>