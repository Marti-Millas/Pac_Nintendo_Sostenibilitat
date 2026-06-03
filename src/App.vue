<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { Leaf, Menu, X } from 'lucide-vue-next'

const { locale, t } = useI18n()
const route = useRoute()

const mobileOpen = ref(false)

const navLinks = computed(() => [
  { name: t('nav.home'),    to: '/' },
  { name: t('nav.climate'), to: '/canvi-climatic' },
  { name: t('nav.carbon'),  to: '/petjada-carboni' },
  { name: t('nav.esg'),     to: '/asg' },
])

// Funció per assignar els colors dinàmics segons la pàgina
function getLinkColorClass(path, type = 'bg') {
  if (path === '/') return type === 'bg' ? 'bg-nintendo' : 'border-nintendo'
  if (path === '/canvi-climatic') return type === 'bg' ? 'bg-orange-400' : 'border-orange-400'
  if (path === '/petjada-carboni') return type === 'bg' ? 'bg-violet-400' : 'border-violet-400'
  if (path === '/asg') return type === 'bg' ? 'bg-emerald-400' : 'border-emerald-400'
  return ''
}

function setLocale(lang) {
  locale.value = lang
}

function toggleMobile() {
  mobileOpen.value = !mobileOpen.value
}
</script>

<template>
  <!-- ────────────────────────────────────────────────
        TOOLBAR / NAVBAR
  ──────────────────────────────────────────────── -->
  <header class="fixed top-0 left-0 right-0 z-50 bg-zinc-950/95 backdrop-blur border-b border-zinc-800">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-6">

      <!-- ── Logo ── -->
     <RouterLink to="/" class="flex items-center gap-2.5 group shrink-0">
        <span class="flex items-center justify-center w-8 h-8 rounded-full bg-nintendo text-white shadow-[0_0_12px_rgba(230,0,18,0.5)] group-hover:shadow-[0_0_20px_rgba(230,0,18,0.75)] transition-shadow duration-300">
          <Leaf :size="16" stroke-width="2.5" />
        </span>
        <span class="flex items-baseline text-white font-bold text-xl tracking-tight">
          Nintendo
          <span class="ml-2 text-red-500 font-medium tracking-[0.2em] text-xs uppercase">Sostenibilitat</span>
        </span>
      </RouterLink>

      <!-- ── Desktop links ── -->
      <ul class="hidden md:flex items-center gap-1 flex-1 justify-center">
        <li v-for="link in navLinks" :key="link.to">
          <RouterLink
            :to="link.to"
            class="relative px-4 py-1.5 text-sm font-medium text-zinc-400 hover:text-white transition-colors duration-200 rounded-md hover:bg-zinc-800/60 group"
            active-class="!text-white"
          >
            {{ link.name }}
            <!-- Linia indicadora dinàmica (Canvia de color en fer hover o estar actiu) -->
            <span
              class="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] rounded-full transition-all duration-300 w-0 group-hover:w-4/5"
              :class="[
                route.path === link.to ? '!w-4/5' : '',
                getLinkColorClass(link.to, 'bg')
              ]"
            />
          </RouterLink>
        </li>
      </ul>

      <!-- ── Right side: locale switcher + hamburger ── -->
      <div class="flex items-center gap-3 shrink-0">
        <!-- Locale switcher -->
        <div class="flex items-center gap-1 bg-zinc-900 border border-zinc-700 rounded-full px-1 py-1">
          <button
            v-for="lang in ['ca', 'es']"
            :key="lang"
            @click="setLocale(lang)"
            class="px-3 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200"
            :class="locale === lang
              ? 'bg-nintendo text-white shadow-[0_0_8px_rgba(230,0,18,0.45)]'
              : 'text-zinc-400 hover:text-white'"
          >
            {{ lang }}
          </button>
        </div>

        <!-- Hamburger (mobile) -->
        <button
          class="md:hidden text-zinc-400 hover:text-white transition-colors p-1"
          @click="toggleMobile"
          :aria-label="mobileOpen ? 'Tanca el menú' : 'Obre el menú'"
        >
          <component :is="mobileOpen ? X : Menu" :size="22" />
        </button>
      </div>
    </nav>

    <!-- ── Mobile drawer ── -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div v-if="mobileOpen" class="md:hidden bg-zinc-950 border-t border-zinc-800 px-4 pb-4">
        <ul class="flex flex-col gap-1 mt-3">
          <li v-for="link in navLinks" :key="link.to">
            <RouterLink
              :to="link.to"
              @click="mobileOpen = false"
              class="block px-4 py-2.5 rounded-lg text-sm font-medium text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all duration-200"
              active-class="!text-white !bg-zinc-800"
              :class="[route.path === link.to ? `border-l-2 ${getLinkColorClass(link.to, 'border')}` : '']"
            >
              {{ link.name }}
            </RouterLink>
          </li>
        </ul>
      </div>
    </Transition>
  </header>

  <!-- ── Page content ── -->
  <main class="pt-16 min-h-screen bg-zinc-950">
    <router-view v-slot="{ Component }">
      <transition 
        enter-active-class="transition-all duration-500 ease-out"
        enter-from-class="opacity-0 translate-y-4"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition-all duration-200 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-4"
        mode="out-in"
      >
        <component :is="Component" />
      </transition>
    </router-view>
  </main>

  <!-- ── Footer ── -->
  <!-- ── Footer (Modificat amb enllaç oficial i efecte hover) ── -->
  <footer class="bg-zinc-950 border-t border-zinc-800 py-8 px-4">
    <div class="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-zinc-500 text-xs">
      <p>
        © {{ new Date().getFullYear() }} 
        <a 
          href="https://www.nintendo.co.jp/csr/en-us/esg_data/index.html?active-topics=topics01" 
          target="_blank" 
          rel="noopener noreferrer"
          class="hover:text-nintendo hover:underline transition-all duration-200 ml-1 inline-flex items-center gap-1"
        >
          {{ $t('footerGlobal.copy') }}
          <span class="text-[10px] bg-zinc-900 border border-zinc-800 text-zinc-400 px-1.5 py-0.5 rounded ml-1 group-hover:border-zinc-700">Font Oficial ↗</span>
        </a>
      </p>
      <p class="flex items-center gap-1.5">
        <Leaf :size="12" class="text-nintendo" />
        {{ $t('footerGlobal.text') }}
      </p>
    </div>
  </footer>
</template>