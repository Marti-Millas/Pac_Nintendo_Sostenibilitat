<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { Zap, Leaf, Wind, Recycle, X, ChevronRight, Mail, CheckCircle } from 'lucide-vue-next'
import { useToast } from 'vue-toastification'

const { t } = useI18n()
const toast = useToast()

// ── Newsletter ──────────────────────────────────────
const email       = ref('')
const submitted   = ref(false)
const loading     = ref(false)

function handleSubscribe() {
  if (!email.value) return
  loading.value = true
  setTimeout(() => {
    submitted.value = true
    loading.value   = false
    email.value     = ''
    toast.success(t('home.newsSuccess'))
  }, 800)
}

// ── Modal ───────────────────────────────────────────
const modalOpen = ref(false)

// ── KPI cards data ───────────────────────────────────
const kpis = computed(() => [
  {
    icon:  Zap,
    label: t('home.kpi1'),
    value: '209.299,7',
    unit:  'GJ',
    sub:   '2024',
    color: 'from-amber-500/20 to-transparent',
    glow:  'shadow-amber-500/20',
    iconBg:'bg-amber-500/15 text-amber-400',
  },
  {
    icon:  Wind,
    label: t('home.kpi2'),
    value: '41.618,9',
    unit:  'GJ',
    sub:   '≈ 19,9%',
    color: 'from-emerald-500/20 to-transparent',
    glow:  'shadow-emerald-500/20',
    iconBg:'bg-emerald-500/15 text-emerald-400',
  },
  {
    icon:  Leaf,
    label: t('home.kpi3'),
    value: '2.499.262,3',
    unit:  t('carbon.unit'), // MODIFICAT: Ara és dinàmic basat en l'idioma
    sub:   'Abast 1, 2, 3',
    color: 'from-nintendo/20 to-transparent',
    glow:  'shadow-nintendo/20',
    iconBg:'bg-nintendo/15 text-nintendo',
  },
])

// ── Plastic recycling goals (modal) ─────────────────
const recyclingGoals = computed(() => [
  { pct: '50%', desc: t('home.modalG1') },
  { pct: '100%', desc: t('home.modalG2') },
  { pct: '40%', desc: t('home.modalG3') },
  { pct: '↑', desc: t('home.modalG4') },
])
</script>

<template>
  <div class="text-white">

    <section class="relative overflow-hidden px-4 pt-20 pb-24 sm:pt-28 sm:pb-32">
      <div class="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:48px_48px]" />
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-nintendo/10 blur-[120px] rounded-full pointer-events-none" />

      <div class="relative max-w-4xl mx-auto text-center">
        <span class="inline-flex items-center gap-2 border border-nintendo/40 bg-nintendo/10 text-nintendo text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-8">
          <Leaf :size="12" />
          {{ $t('home.badge') }}
        </span>

        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight mb-6">
          {{ $t('home.title1') }}<br>
          {{ $t('home.title2') }} <span class="text-nintendo">Nintendo</span>
        </h1>

        <p class="text-zinc-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
          {{ $t('home.desc') }}
        </p>

        <div class="flex flex-wrap items-center justify-center gap-4">
          <RouterLink
            to="/canvi-climatic"
            class="inline-flex items-center gap-2 bg-nintendo hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-full shadow-[0_0_20px_rgba(230,0,18,0.35)] hover:shadow-[0_0_28px_rgba(230,0,18,0.55)] transition-all duration-300 text-sm"
          >
            {{ $t('home.btnExplore') }}
            <ChevronRight :size="16" />
          </RouterLink>

          <button
            @click="modalOpen = true"
            class="inline-flex items-center gap-2 border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 text-sm group"
          >
            <Recycle :size="16" class="text-emerald-400 group-hover:rotate-180 transition-transform duration-500" />
            {{ $t('home.btnModal') }}
          </button>
        </div>
      </div>
    </section>

    <section class="px-4 pb-24">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-2xl sm:text-3xl font-bold mb-2">{{ $t('home.kpiTitle') }}</h2>
          <p class="text-zinc-500 text-sm">{{ $t('home.kpiSub') }}</p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <div
            v-for="(kpi, i) in kpis"
            :key="i"
            class="relative overflow-hidden rounded-2xl border border-zinc-900 bg-zinc-900 p-6 hover:border-zinc-600 transition-all duration-300 group"
            :class="`hover:shadow-xl ${kpi.glow}`"
          >
            <div :class="`absolute inset-0 bg-gradient-to-br ${kpi.color} opacity-60 group-hover:opacity-100 transition-opacity duration-300`" />
            <div class="relative">
              <div :class="`inline-flex items-center justify-center w-10 h-10 rounded-xl mb-5 ${kpi.iconBg}`">
                <component :is="kpi.icon" :size="20" stroke-width="2" />
              </div>
              <p class="text-zinc-400 text-xs font-medium uppercase tracking-widest mb-2">{{ kpi.label }}</p>
              <p class="text-3xl sm:text-4xl font-black tracking-tight text-white leading-none">
                {{ kpi.value }}
                <span class="text-base font-semibold text-zinc-400 ml-1">{{ kpi.unit }}</span>
              </p>
              <p class="text-zinc-500 text-xs mt-2">{{ kpi.sub }}</p>
            </div>
          </div>
        </div>
        <p class="text-center text-zinc-600 text-xs mt-6">{{ $t('home.kpiLegend') }}</p>
      </div>
    </section>

    <section class="px-4 pb-28">
      <div class="max-w-2xl mx-auto">
        <div class="relative rounded-3xl border border-zinc-800 bg-zinc-900 p-8 sm:p-10 overflow-hidden">
          <div class="absolute -top-20 -right-20 w-60 h-60 bg-nintendo/10 blur-[80px] rounded-full pointer-events-none" />
          <div class="relative">
            <div class="flex items-center gap-3 mb-2">
              <Mail :size="20" class="text-nintendo" />
              <h2 class="text-xl font-bold">{{ $t('home.newsTitle') }}</h2>
            </div>
            <p class="text-zinc-400 text-sm mb-7">{{ $t('home.newsDesc') }}</p>

            <Transition
              enter-active-class="transition-all duration-400 ease-out"
              enter-from-class="opacity-0 scale-95"
              enter-to-class="opacity-100 scale-100"
            >
              <div v-if="submitted" class="flex items-center gap-3 bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 rounded-xl px-5 py-4 text-sm font-medium">
                <CheckCircle :size="18" class="shrink-0" />
                {{ $t('home.newsSuccess') }}
              </div>
            </Transition>

            <form v-if="!submitted" @submit.prevent="handleSubscribe" class="flex flex-col sm:flex-row gap-3">
              <input
                v-model="email"
                type="email"
                required
                :placeholder="$t('home.newsPlaceholder')"
                class="flex-1 bg-zinc-800 border border-zinc-700 focus:border-nintendo focus:ring-1 focus:ring-nintendo/50 text-white placeholder-zinc-500 rounded-xl px-4 py-3 text-sm outline-none transition-all duration-200"
              />
              <button
                type="submit"
                :disabled="loading"
                class="inline-flex items-center justify-center gap-2 bg-nintendo hover:bg-red-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold px-6 py-3 rounded-xl shadow-[0_0_16px_rgba(230,0,18,0.3)] hover:shadow-[0_0_24px_rgba(230,0,18,0.5)] transition-all duration-300 text-sm whitespace-nowrap"
              >
                <span v-if="loading" class="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                <span v-else>{{ $t('home.newsBtn') }}</span>
              </button>
            </form>
            <p class="text-zinc-600 text-xs mt-4">{{ $t('home.newsSpam') }}</p>
          </div>
        </div>
      </div>
    </section>

    <Teleport to="body">
      <Transition
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition-all duration-200 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div v-if="modalOpen" class="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm" @click.self="modalOpen = false">
          <Transition
            enter-active-class="transition-all duration-300 ease-out"
            enter-from-class="opacity-0 scale-95 translate-y-4"
            enter-to-class="opacity-100 scale-100 translate-y-0"
            leave-active-class="transition-all duration-200 ease-in"
            leave-from-class="opacity-100 scale-100 translate-y-0"
            leave-to-class="opacity-0 scale-95 translate-y-4"
          >
            <div v-if="modalOpen" class="relative w-full max-w-lg bg-zinc-900 border border-zinc-700 rounded-3xl shadow-2xl overflow-hidden">
              <div class="relative bg-gradient-to-r from-emerald-500/10 to-zinc-900 px-6 pt-6 pb-5 border-b border-zinc-800">
                <div class="absolute -top-10 -left-10 w-40 h-40 bg-emerald-500/10 blur-[60px] rounded-full" />
                <div class="relative flex items-start justify-between gap-4">
                  <div>
                    <div class="flex items-center gap-2 mb-1">
                      <Recycle :size="18" class="text-emerald-400" />
                      <span class="text-emerald-400 text-xs font-semibold uppercase tracking-widest">{{ $t('home.modalTag') }}</span>
                    </div>
                    <h3 class="text-xl font-bold text-white">{{ $t('home.modalTitle') }}</h3>
                    <p class="text-zinc-400 text-sm mt-1">{{ $t('home.modalSub') }}</p>
                  </div>
                  <button @click="modalOpen = false" class="shrink-0 p-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white transition-all duration-200">
                    <X :size="16" />
                  </button>
                </div>
              </div>

              <div class="px-6 py-5 space-y-4">
                <div v-for="(goal, i) in recyclingGoals" :key="i" class="flex items-start gap-4 p-4 rounded-xl bg-zinc-800/60 border border-zinc-700/50 hover:border-emerald-500/30 transition-colors duration-200">
                  <span class="shrink-0 inline-flex items-center justify-center w-12 h-10 rounded-lg bg-emerald-500/15 text-emerald-400 font-black text-base leading-none">
                    {{ goal.pct }}
                  </span>
                  <p class="text-zinc-300 text-sm leading-relaxed">{{ goal.desc }}</p>
                </div>
              </div>

              <div class="px-6 pb-6">
                <p class="text-zinc-600 text-xs mb-4">{{ $t('home.modalFont') }}</p>
                <button @click="modalOpen = false" class="w-full bg-nintendo hover:bg-red-700 text-white font-semibold py-3 rounded-xl shadow-[0_0_14px_rgba(230,0,18,0.3)] hover:shadow-[0_0_22px_rgba(230,0,18,0.5)] transition-all duration-300 text-sm">
                  {{ $t('home.modalBtn') }}
                </button>
              </div>
            </div>
          </Transition>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>