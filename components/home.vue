<script setup>

import { onMounted } from 'vue';
onMounted(() => {
	const serinusLogo = document.getElementById('serinus');
	const acanthisLogo = document.getElementById('acanthis');
	const frontierLogo = document.getElementById('frontier');
	const hero = document.getElementById('hero');
	const feathers = [];
	serinusLogo.addEventListener('mouseenter', () => {
		if(feathers.length > 20) return;
		const feather = document.createElement('div');
		const featherImg = document.createElement('img');
		featherImg.src = '/birds/serinus-feather.png';
		feather.classList.add('absolute', 'w-8', 'transition-all', 'feather');
		featherImg.classList.add('feather-side', 'transition-all');
		feather.appendChild(featherImg);
		feather.style.top = '0px';
		feather.style.left = Math.random() * hero.offsetWidth + 'px';
		hero.appendChild(feather);
		feathers.push(feather);
		feather.addEventListener('animationend', () => {
			feather.remove();
			feathers.splice(feathers.indexOf(feather), 1);
		})
	})
	acanthisLogo.addEventListener('mouseenter', () => {
		if(feathers.length > 20) return;
		const feather = document.createElement('div');
		const featherImg = document.createElement('img');
		featherImg.src = '/birds/acanthis-feather.png';
		feather.classList.add('absolute', 'w-8', 'transition-all', 'feather');
		featherImg.classList.add('feather-side', 'transition-all');
		feather.appendChild(featherImg);
		feather.style.top = '0px';
		feather.style.left = Math.random() * hero.offsetWidth + 'px';
		hero.appendChild(feather);
		feathers.push(feather);
		feather.addEventListener('animationend', () => {
			feather.remove();
			feathers.splice(feathers.indexOf(feather), 1);
		})
	})
	frontierLogo.addEventListener('mouseenter', () => {
		if(feathers.length > 20) return;
		const feather = document.createElement('div');
		const featherImg = document.createElement('img');
		featherImg.src = '/birds/frontier-feather.png';
		feather.classList.add('absolute', 'w-8', 'transition-all', 'feather');
		featherImg.classList.add('feather-side', 'transition-all');
		feather.appendChild(featherImg);
		feather.style.top = '0px';
		feather.style.left = Math.random() * hero.offsetWidth + 'px';
		hero.appendChild(feather);
		feathers.push(feather);
		feather.addEventListener('animationend', () => {
			feather.remove();
			feathers.splice(feathers.indexOf(feather), 1);
		})
	})
});
</script>

<template>
	<div id="hero" class="container flex w-full h-dvh gap-8 flex items-center justify-between">
		<div class="flex flex-col">
            <div class="text-6xl lg:text-8xl">Avesbox</div>
            <div class="my-4 lg:my-8 text-xl lg:text-2xl text-center">
                Unleash the power of Flutter and Dart with Avesbox
            </div>
            <a href="https://discord.gg/zydgnJ3ksJ" class="max-w-fit bg-gradient-to-r from-rose-500 to-rose-600 px-8 py-4 rounded-full flex items-center gap-4"><span class="vpi-social-discord" style="--icon: url('https://api.iconify.design/simple-icons/discord.svg');"></span> Join the community</a>
        </div>
        <div class="relative w-72 h-72">
            <img src="/logo.png" alt="Avesbox Logo" class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72" />
			<a href="https://serinus.app" target="_blank">
				<img src="/birds/serinus-logo.png" id="serinus" alt="Serinus Image" class="absolute top-20 left-24 w-36 hover:scale-125 transition-all">
			</a>
			<a href="https://acanthis.serinus.app" target="_blank">
				<img src="/birds/acanthis-logo.png" id="acanthis" alt="Acanthis Image" class="absolute -top-8 -right-16 w-36 hover:scale-125 transition-all">
			</a>
			<a href="https://pub.dev/packages/frontier" target="_blank">
				<img src="/birds/frontier-logo.png" id="frontier" alt="Frontier Image" class="absolute -top-16 right-16 w-36 hover:scale-125 transition-all">
			</a>
		</div>
        
  	</div>
</template>

<style>

.feather {
	animation: falling 5s linear, side 5s ease-in-out;
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
		top: 100vh;
		rotate: z 360deg;
	}
}
</style>

<style scoped>
#learn-more {
    color: rgba(255, 255, 255, 0.7);
}
.vp-doc a {
    color: white;
    text-decoration: none;
}
.vp-doc a.text-black {
    color: rgb(27, 27, 31);
}
p {
	margin: 0 !important;
}
.results{
	line-height: 1rem;
}
ol {
	padding: 0;
}

@keyframes bird {
    0%, 100% {
      transform: scale(0);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    10% {
        transform: scale(1);
    }
    25% {
        transform: scaleX(-1);
    }
    40% {
        transform: scale(1);
    }
    60% {
        transform: translateX(-50%);
    }
    75% {
        transform: translateX(-50%) scaleX(-1);
    }
    90% {
        transform: scaleX(-1) translateX(0);
    }
  }
</style>