<script setup>
</script>

<template>
	<div id="hero" class="flex w-full h-[40rem] gap-8 flex items-center justify-center p-8 md:p-0">
		<div class="flex flex-col items-center">
			<div class="p-1 w-16 h-16 rounded-full bg-rose-500/25 flex items-center justify-center border-2 border-rose-500">
				<img src="/logo.png">
			</div>
            <div class="text-4xl lg:text-6xl text-center font-bold text-pretty md:w-[44rem]">The toolbox for your Dart & Flutter experience</div>
            <div class="my-4 lg:my-8 text-xl text-center md:w-[44rem] text-pretty">
                Our mission is to provide you with the best tools and resources to develop your applications.
            </div>
            <a href="https://discord.gg/zydgnJ3ksJ" class="max-w-fit bg-gradient-to-r from-rose-500 to-rose-600 px-8 py-4 rounded-full flex items-center gap-4"><span class="vpi-social-discord" style="--icon: url('https://api.iconify.design/simple-icons/discord.svg');"></span> Join the community</a>
        </div>
  	</div>
</template>

<style scoped>
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

ol {
	padding: 0;
}
</style>