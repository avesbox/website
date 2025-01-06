<script setup>
</script>

<template>
	<div id="hero" class="container flex w-full h-[40rem] gap-8 flex items-center justify-center">
		<div class="flex flex-col items-center">
			<div class="p-1 w-16 h-16 rounded-full bg-[#f3523d]/25 flex items-center justify-center border-2 border-[#f3523d]">
				<img src="/logo.png">
			</div>
            <div class="text-6xl lg:text-8xl text-center font-semibold">Avesbox</div>
            <div class="my-4 lg:my-8 text-xl lg:text-2xl text-center md:w-[36rem] text-pretty">
                The ecosystem to empower your Dart and Flutter development
            </div>
            <a href="https://discord.gg/zydgnJ3ksJ" class="max-w-fit bg-gradient-to-r from-rose-500 to-rose-600 px-8 py-4 rounded-full flex items-center gap-4"><span class="vpi-social-discord" style="--icon: url('https://api.iconify.design/simple-icons/discord.svg');"></span> Join the community</a>
        </div>
  	</div>
</template>

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

.results {
	line-height: 1rem;
}

ol {
	padding: 0;
}

@keyframes bird {

	0%,
	100% {
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