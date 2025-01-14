<script setup>

import { onMounted, ref } from 'vue';

const projects = [
    {
        name: 'Serinus',
        description: 'The modular server-side framework of your dreams',
        image: '/birds/serinus-logo.png',
        link: 'https://serinus.app',
        color: '#ff9800'
    },
    {
        name: 'Acanthis',
        description: 'Your best pal for validating data',
        image: '/birds/acanthis-logo.png',
        link: 'https://acanthis.serinus.app',
        color: '#c52233'
    },
    {
        name: 'Frontier',
        description: 'Simple Strategy-based Authentication library',
        image: '/birds/frontier-logo.png',
        link: 'https://github.com/avesbox/frontier',
        color: '#f3523d'
    },
    // {
    //     name: 'Loxia',
    //     description: 'Type-safe ORM for your Dart projects',
    //     image: '/birds/loxia-logo.png',
    //     link: 'https://github.com/avesbox/loxia'
    // }
]

const currentProject = ref(0)

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
    <div class="mx-auto flex flex-col justify-center lg:w-[64rem] relative mb-8">
        <h1 class="text-2xl font-bold">Projects</h1>
        <p class="text-lg mb-8">We maintain and develop our projects focusing on the developer experience and their interoperability to offer you the best tooling for Dart</p>
        <div class="w-full grid grid-cols-2">
            
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
.project {
    cursor: pointer;
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