<script setup>
import { ref } from 'vue'

const birds = [
	{
		name: 'Serinus',
		logo: '/birds/serinus-logo.png',
		feather: '/birds/serinus-feather.png',
		link: 'https://serinus.app',
		gradient: 'bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-56 blur-3xl z-[-1]'
	},
	{
		name: 'Acanthis',
		logo: '/birds/acanthis-logo.png',
		feather: '/birds/acanthis-feather.png',
		link: 'https://acanthis.serinus.app',
		gradient: 'bg-gradient-to-r from-rose-500 to-slate-700 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-56 blur-3xl z-[-1]'
	}
]

const currentIndex = ref(0)

</script>

<template>
</template>

<style scoped>
</style>