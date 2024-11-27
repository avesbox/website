<script setup>
const props = defineProps({
    posts: Array
})

</script>

<template>

	<div>
		<header class="flex flex-col justify-center max-w-7xl gap-3 w-full mx-auto pt-20 pb-4">
			<h1 class="text-5xl">
				Avesbox Blog
			</h1>
			<p class="text-lg">
				Release notes, updates, and more.
			</p>
		</header>
		<main class="lg:grid flex flex-col max-w-7xl mx-auto gap-4 w-full my-4 grid-cols-4 grid-rows-3">
			<a v-for="(post, index) in props.posts"
				class="p-4 rounded-lg hover:bg-rose-500/25 focus:bg-rose-500/25 transition-all cursor-pointer"
				:class="index == 0 ? ['col-span-2', 'row-span-3'] : ['col-span-2', 'row-span-1']"
				:href="post.href" :key="post.date + post.href">
				<article v-if="index == 0" class="flex flex-col gap-2">
					<div :style="'background-image: url('+post.src+')'" class="rounded-lg h-72 bg-cover bg-center" />
					<h2 class="text-3xl">
						{{ post.title }}
					</h2>
					<h3 class="text-sm"> {{ post.date }}</h3>
				</article>
				<article v-if="index > 0" class="flex gap-2">
					<div class="rounded-lg w-24 h-24 bg-cover bg-center" :style="'background-image: url('+post.src+')'"></div>
					<div class="flex flex-col gap-2">
						<h2 class="text-2xl">
							{{ post.title }}
						</h2>
						<h3 class="text-sm"> {{ post.date }}</h3>
					</div>
				</article>
			</a>
		</main>
	</div>
    
</template>