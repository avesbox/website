<script setup>

import { onMounted, ref } from 'vue';

const projects = [
    {
        name: 'Serinus',
        description: 'The modular server-side framework of your dreams',
        image: '/birds/serinus-logo.png',
        link: 'https://serinus.app',
        color: '#ff9800',
        shadowColor: 'rgba(255, 152, 0, 0.5)'
    },
    {
        name: 'Acanthis',
        description: 'Your best pal for validating data',
        image: '/birds/acanthis-logo.png',
        link: 'https://acanthis.serinus.app',
        color: '#c52233',
        shadowColor: 'rgba(197, 34, 51, 0.5)'
    },
    {
        name: 'Frontier',
        description: 'Simple Strategy-based Authentication library',
        image: '/birds/frontier-logo.png',
        link: 'https://github.com/avesbox/frontier',
        color: '#5E72A7',
        shadowColor: 'rgba(94, 114, 167, 0.5)'
    },
    {
        name: 'Secure Session',
        description: 'Secure stateless cookie session',
        image: '/logo.png',
        link: 'https://github.com/avesbox/secure_session',
        color: '#f3523d',
        shadowColor: 'rgba(243, 82, 61, 0.5)'
    },
    {
        name: 'Microdiff',
        description: 'A zero dependency object and array comparison library',
        image: '/logo.png',
        link: 'https://github.com/avesbox/microdiff',
        color: '#f3523d',
        shadowColor: 'rgba(243, 82, 61, 0.5)'
    },
    {
        name: 'Dart Socket.io',
        description: 'Port of JS/Node library Socket.io',
        image: '/logo.png',
        link: 'https://github.com/avesbox/dart_socket_io',
        color: '#f3523d',
        shadowColor: 'rgba(243, 82, 61, 0.5)'
    }
]

</script>

<template>
    <div class="mx-auto flex flex-col justify-center lg:w-[64rem] mb-8 p-4">
        <h1 class="text-2xl font-bold">Projects</h1>
        <p class="text-lg mb-8">We maintain and develop our projects focusing on the developer experience and their interoperability to offer you the best tooling for Dart</p>
        <div class="w-full grid lg:grid-cols-2 gap-4">
            <a :href="project.link" v-for="project of projects" :key="project.name" class="w-full p-4 rounded-lg relative transition-all grayscale hover:grayscale-0" :style="{'boxShadow': '0 0 4px ' + project.shadowColor}">
                <div class="flex justify-between items-center gap-2">
                    <div class="flex flex-col max-w-[70%]">
                        <div class="text-xl text-zinc-900 font-semibold">{{ project.name }}</div>
                        <span class="text-sm text-zinc-600 font-normal text-pretty">{{ project.description }}</span>
                    </div>
                    <div class="p-1 w-16 h-16 rounded-full flex items-center justify-center border-2" :style="{backgroundColor: project.shadowColor, borderColor: project.color}">
                        <img :src="project.image">
                    </div>
                </div>
            </a>
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
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 300ms;
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