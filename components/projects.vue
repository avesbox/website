<script setup>

import { onMounted } from 'vue';

const projects = [
    {
        name: 'Serinus',
        description: 'The modular server-side framework of your dreams',
        image: '/birds/serinus-logo.png',
        link: 'https://serinus.app'
    },
    {
        name: 'Acanthis',
        description: 'Your best pal for validating data',
        image: '/birds/acanthis-logo.png',
        link: 'https://acanthis.serinus.app'
    },
    {
        name: 'Frontier',
        description: 'Simple Strategy-based Authentication library',
        image: '/birds/frontier-logo.png',
        link: 'https://github.com/avesbox/frontier'
    },
    // {
    //     name: 'Loxia',
    //     description: 'Type-safe ORM for your Dart projects',
    //     image: '/birds/loxia-logo.png',
    //     link: 'https://github.com/avesbox/loxia'
    // }
]

onMounted(() => {
    for (const bird of projects) {
        const img = document.getElementById(bird.name);
        img.addEventListener('mouseenter', () => {
            const feather = document.createElement('div');
            const featherImg = document.createElement('img');
            featherImg.src = `/birds/${bird.name.toLowerCase()}-feather.png`;
            feather.classList.add('absolute', 'w-8', 'transition-all', 'feather');
            featherImg.classList.add('feather-side', 'transition-all');
            feather.appendChild(featherImg);
            feather.style.top = '0px';
            feather.style.left = Math.random() * img.offsetWidth + 'px';
            img.appendChild(feather);
            feather.addEventListener('animationend', () => {
                feather.remove();
            })
        })
    }
})

</script>

<template>
    <div class="flex flex-col justify-center w-full relative mb-8">
        <h1 class="text-2xl font-bold">Projects</h1>
        <p class="text-lg md:w-[48rem] mb-8">We create and maintain projects to streamline your development process</p>
        <div class="flex flex-col items-center w-full gap-4">
            <div :id="bird.name" v-for="bird in projects" :key="bird.name" class="bird flex items-center w-full h-32 justify-between bg-transparent">
                <a :href="bird.link" target="_blank">
                    <div class="text-4xl font-bold">{{ bird.name }}</div>
                    <span class="md:flex hidden">{{ bird.description }}</span>
                </a>
                <img :src="bird.image" class="w-32 h-32" />
            </div>
        </div>
    </div>
</template>

<style scoped>

.vp-doc p, .vp-doc summary{
    margin: 0;
    margin-bottom: 2rem;
}
.vp-doc a {
    color: initial;
    text-decoration: none;
}

.bird:hover > img {
    transform: scale(1.1);
}
</style>

<style>

.feather {
	animation: falling 3s linear, side 3s ease-in-out;
	transition: all 0.5s;
	transform-origin: 8px;
}



@keyframes side {
	0% {
		translate: 0px;
	}

	50% {
		translate: -160px;
	}

	100% {
		translate: 0px;
	}
}

@keyframes falling {
	0% {
		top: 0;
		rotate: z 0deg;
	}

	100% {
		top: 60vh;
		rotate: z 360deg;
	}
}
</style>