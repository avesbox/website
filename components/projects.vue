<script setup lang="ts">
  import { motion } from 'motion-v';
  import { scrollVariants } from './actions/scroll_variants';
  import { ref, defineComponent, h } from 'vue';
  import { CodeFile, LightningIcon, PuzzleIcon, RadioIcon, SettingsIcon, ShieldIcon, TerminalIcon } from './icons';
  import { data, type Project } from './projects.data'

  const icons: Record<string, ReturnType<typeof defineComponent>> = {
    'serinus': defineComponent(() => () => h('img', { src: '/birds/serinus-logo.png', class: 'w-10 h-10', alt: 'Serinus Logo' })),
    'acanthis': defineComponent(() => () => h('img', { src: '/birds/acanthis-logo.png', class: 'w-10 h-10', alt: 'Acanthis Logo' })),
    'frontier': defineComponent(() => () => h('img', { src: '/birds/frontier-logo.png', class: 'w-10 h-10', alt: 'Frontier Logo' })),
    'loxia': defineComponent(() => () => h('img', { src: '/birds/loxia-logo.png', class: 'w-10 h-10', alt: 'Loxia Logo' })),
    'canary': defineComponent(() => () => h('img', { src: '/logo.png', class: 'w-10 h-10', alt: 'Canary Logo' })),
    'secure_session': defineComponent(() => () => h('img', { src: '/logo.png', class: 'w-10 h-10', alt: 'Secure Session Logo' })),
  }

  const scope = ref(null);
</script>

<template>
	<section class="py-32 relative grain" ref="scope">
      <div class="absolute top-20 left-10 text-[150px] font-display font-bold text-stroke opacity-5 select-none hidden lg:block">
        02
      </div>

      <div class="container mx-auto px-6 flex flex-col gap-16">
        <div class="grid lg:grid-cols-12 gap-8 mb-20">
          <motion.div
            :variants="scrollVariants.slideLeft"
            initial="hidden"
            whileInView="visible"
            :viewport="{ once: true, amount: 0.3 }"
            :transition="{ duration: 0.6 }"
            class="lg:col-span-4"
          >
            <span class="tag text-muted-foreground mb-4 block w-fit">Projects</span>
            <div class="text-4xl md:text-5xl font-display font-bold leading-tight">
              Interoperability
              <br />
              <span class="font-serif italic font-normal text-muted-foreground">by design</span>
            </div>
          </motion.div>
          
          <motion.div
            :variants="scrollVariants.slideRight"
            initial="hidden"
            whileInView="visible"
            :viewport="{ once: true, amount: 0.3 }"
            :transition="{ duration: 0.6, delay: 0.2 }"
            class="lg:col-span-5 lg:col-start-7 flex items-end"
          >
            <p class="text-lg text-muted-foreground leading-relaxed">
              Designed to make building with Dart and Flutter straightforward.
              Avoid unnecessary complexity. Focus on your applications.
            </p>
          </motion.div>
        </div>

        <!-- Features Grid - Offset layout -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
        	<motion.a
        	  :key="feature.title"
            :href="feature.link"
        	  :variants="scrollVariants.scaleIn"
        	  :viewport="{ once: true, amount: 0.2 }"
        	  :transition="{ duration: 0.5, delay: index * 0.1 }"
        	  initial="hidden"
        	  whileInView="visible"
        	  class="group bg-background p-8 hover:bg-card transition-colors relative"
			      v-for="(feature, index) in data"
        	>
            <!-- Number -->
        	  <span class="absolute top-4 right-4 font-mono text-xs text-muted-foreground/50">
        	    {{feature.number}}
        	  </span>

            <span v-if="feature.wip" class="tag absolute top-3 right-10 font-mono text-xs text-muted-foreground/50 text-primary border-primary/30 group-hover:border-primary group-hover:bg-primary/10 transition-all">
        	    WIP
        	  </span>
		  
        	  <motion.div 
        	    class="w-12 h-12 border-2 border-primary/30 flex items-center justify-center mb-6 group-hover:border-primary group-hover:bg-primary/10 transition-all"
        	    :whileHover="{ rotate: 5, scale: 1.05 }"
        	  >
          	  <component :is="icons[feature.icon]" class="w-6 h-6 text-primary"/>              
        	  </motion.div>
		  
        	  <div class="text-xl relative font-display font-semibold text-foreground mb-3">
        	    {{feature.title}}
              <span v-if="feature.version" class="absolute top-0 ml-2 text-[0.5rem] font-mono text-muted-foreground/50">
                ^{{feature.version}}
              </span>
        	  </div>
        	  <p class="text-sm text-muted-foreground leading-relaxed">
        	    {{feature.description}}
        	  </p>
        	</motion.a>
        </div>
        <a
            href="https://github.com/avesbox"
            target="_blank"
            rel="noopener noreferrer"
            class="star inline-flex items-center gap-3 px-6 py-4 max-w-fit m-auto editorial-border text-foreground font-display font-semibold hover:bg-foreground hover:text-background! transition-all"
        >
            Explore all projects on GitHub
        </a>
      </div>
    </section>
</template>

<style scoped>
a.star:hover {
	color: hsl(var(--background)) !important;
}
</style>