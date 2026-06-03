<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { Radar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
} from 'chart.js'
import {
  Droplets,
  Users,
  ShieldCheck,
  Leaf,
  CheckCircle,
  TrendingUp,
  Award,
} from 'lucide-vue-next'

ChartJS.register(Title, Tooltip, Legend, RadialLinearScale, PointElement, LineElement, Filler)

const { t } = useI18n()

// Estat per controlar quin any de la llista té el ratolí a sobre (efecte hover/seleccionat)
const hoveredYear = ref(null)

// ── ESG pillars — computed per reactivitat i18n ──────────
const pillars = computed(() => [
  {
    icon: Leaf,
    letter: t('esg.pillarA.letter'),
    labelFull: t('esg.pillarA.label'),
    color: 'text-emerald-400',
    border: 'border-emerald-500/30',
    bg: 'bg-emerald-500/10',
    glow: 'shadow-emerald-500/10',
    hex: '#34d399',
    items: [
      { title: t('esg.pillarA.item1Title'), desc: t('esg.pillarA.item1Desc') },
      { title: t('esg.pillarA.item2Title'), desc: t('esg.pillarA.item2Desc') },
      { title: t('esg.pillarA.item3Title'), desc: t('esg.pillarA.item3Desc') },
    ],
  },
  {
    icon: Users,
    letter: t('esg.pillarS.letter'),
    labelFull: t('esg.pillarS.label'),
    color: 'text-sky-400',
    border: 'border-sky-500/30',
    bg: 'bg-sky-500/10',
    glow: 'shadow-sky-500/10',
    hex: '#38bdf8',
    items: [
      { title: t('esg.pillarS.item1Title'), desc: t('esg.pillarS.item1Desc') },
      { title: t('esg.pillarS.item2Title'), desc: t('esg.pillarS.item2Desc') },
      { title: t('esg.pillarS.item3Title'), desc: t('esg.pillarS.item3Desc') },
    ],
  },
  {
    icon: ShieldCheck,
    letter: t('esg.pillarG.letter'),
    labelFull: t('esg.pillarG.label'),
    color: 'text-amber-400',
    border: 'border-amber-500/30',
    bg: 'bg-amber-500/10',
    glow: 'shadow-amber-500/10',
    hex: '#fbbf24',
    items: [
      { title: t('esg.pillarG.item1Title'), desc: t('esg.pillarG.item1Desc') },
      { title: t('esg.pillarG.item2Title'), desc: t('esg.pillarG.item2Desc') },
      { title: t('esg.pillarG.item3Title'), desc: t('esg.pillarG.item3Desc') },
    ],
  },
])

// ── Water consumption data — dades base fixes ─────────
const waterData = [
  { year: '2022', value: 35.0 },
  { year: '2023', value: 47.3 },
  { year: '2024', value: 49.5 },
]

// ── Radar Chart — computed per reactivitat i18n ──────────
const chartData = computed(() => ({
  labels: ['2022', '2023', '2024'],
  datasets: [
    {
      label: t('esg.chartDatasetLabel'),
      data: [35.0, 47.3, 49.5],
      backgroundColor: 'rgba(52,211,153,0.18)',
      borderColor: '#34d399',
      borderWidth: 2.5,
      pointBackgroundColor: '#34d399',
      pointBorderColor: '#18181b',
      pointBorderWidth: 2,
      pointRadius: 6,
      pointHoverRadius: 8,
      fill: true,
    },
  ],
}))

const chartOptions = computed(() => ({
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    r: {
      min: 0,
      max: 60,
      ticks: {
        color: '#52525b',
        backdropColor: 'transparent',
        font: { size: 10 },
        stepSize: 15,
        callback: (v) => `${v}k`,
      },
      grid: { color: 'rgba(255,255,255,0.07)' },
      angleLines: { color: 'rgba(255,255,255,0.07)' },
      pointLabels: {
        color: '#a1a1aa',
        font: { size: 13, weight: 'bold' },
      },
    },
  },
  plugins: {
    legend: { display: false },
    tooltip: {
      backgroundColor: '#18181b',
      borderColor: '#3f3f46',
      borderWidth: 1,
      titleColor: '#f4f4f5',
      bodyColor: '#a1a1aa',
      padding: 12,
      callbacks: {
        label: (ctx) => ` ${ctx.parsed.r} ${t('esg.tooltipUnit')}`,
      },
    },
  },
}))
</script>

<template>
  <div class="min-h-screen bg-zinc-950 text-white">

    <div class="relative overflow-hidden border-b border-zinc-800 bg-zinc-900/50 px-4 py-14 sm:py-20">
      <div class="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div class="pointer-events-none absolute -left-10 top-0 h-full w-1 bg-gradient-to-b from-transparent via-emerald-500 to-transparent opacity-60" />

      <div class="pointer-events-none absolute right-6 top-6 flex gap-3 select-none opacity-10">
        <span class="text-8xl font-black text-emerald-400">A</span>
        <span class="text-8xl font-black text-sky-400">S</span>
        <span class="text-8xl font-black text-amber-400">G</span>
      </div>

      <div class="relative mx-auto max-w-5xl">
        <div class="mb-4 flex items-center gap-2">
          <Award :size="16" class="text-emerald-400" />
          <span class="text-xs font-semibold uppercase tracking-widest text-emerald-400">{{ $t('esg.tag') }}</span>
        </div>
        <h1 class="mb-4 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
          {{ $t('esg.title1') }}<br>
          <span class="text-emerald-400">{{ $t('esg.title2') }}</span>
        </h1>
        <p class="max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-base">
          {{ $t('esg.subtitle') }}
        </p>
      </div>
    </div>

    <div class="mx-auto max-w-6xl px-4 py-16 space-y-16">

      <section>
        <h2 class="mb-8 flex items-center gap-2 text-xl font-bold">
          <TrendingUp :size="18" class="text-emerald-400" />
          {{ $t('esg.areasTitle') }}
        </h2>

        <div class="grid gap-6 sm:grid-cols-3">
          <div
            v-for="pillar in pillars"
            :key="pillar.letter"
            class="rounded-2xl border p-6 transition-all duration-300 hover:shadow-xl"
            :class="[pillar.border, pillar.bg, pillar.glow]"
          >
            <div
              class="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl text-2xl font-black"
              :style="`background:${pillar.hex}20; color:${pillar.hex}`"
            >
              {{ pillar.letter }}
            </div>

            <p class="mb-4 text-base font-bold" :class="pillar.color">{{ pillar.labelFull }}</p>

            <div class="space-y-4">
              <div v-for="item in pillar.items" :key="item.title">
                <div class="flex items-start gap-2 mb-1">
                  <CheckCircle :size="13" class="mt-0.5 shrink-0" :class="pillar.color" />
                  <span class="text-xs font-semibold text-zinc-200">{{ item.title }}</span>
                </div>
                <p class="pl-5 text-xs text-zinc-500 leading-relaxed">{{ item.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="grid gap-8 lg:grid-cols-2 items-center">

        <div>
          <div class="mb-3 flex items-center gap-2">
            <Droplets :size="16" class="text-sky-400" />
            <span class="text-xs font-semibold uppercase tracking-widest text-sky-400">{{ $t('esg.waterTag') }}</span>
          </div>
          <h2 class="mb-4 text-2xl font-bold">{{ $t('esg.waterTitle') }}</h2>
          <p class="mb-8 text-sm text-zinc-400 leading-relaxed">
            {{ $t('esg.waterDesc') }}
          </p>

          <div class="space-y-3">
            <div
              v-for="(d, i) in waterData"
              :key="d.year"
              @mouseenter="hoveredYear = d.year"
              @mouseleave="hoveredYear = null"
              class="flex items-center gap-4 rounded-xl border px-5 py-4 transition-all duration-300"
              :class="hoveredYear === d.year ? 'border-emerald-500/50 bg-zinc-800 scale-[1.01] shadow-lg shadow-emerald-500/5' : 'border-zinc-800 bg-zinc-900 hover:border-emerald-500/30'"
            >
              <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 text-sm font-black">
                {{ d.year }}
              </div>
              <div class="flex-1">
                <div class="flex items-center justify-between mb-1.5">
                  <span class="text-xs text-zinc-400">{{ $t('esg.waterTotal') }}</span>
                  <span class="text-sm font-bold text-emerald-400">{{ d.value }} k·m³</span>
                </div>
                <div class="h-1 w-full rounded-full bg-zinc-800">
                  <div
                    class="h-full rounded-full bg-emerald-400 transition-all duration-700"
                    :style="`width:${(d.value / 60) * 100}%`"
                  />
                </div>
              </div>
              <span v-if="i > 0" class="text-xs text-orange-400 font-semibold shrink-0">
                +{{ ((d.value - waterData[i - 1].value) / waterData[i - 1].value * 100).toFixed(1) }}%
              </span>
              <span v-else class="text-xs text-zinc-600 shrink-0">{{ $t('esg.waterBase') }}</span>
            </div>
          </div>
        </div>

        <div class="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 sm:p-8">
          <h3 class="mb-1 text-base font-bold">{{ $t('esg.chartTitle') }}</h3>
          <p class="mb-5 text-xs text-zinc-500">{{ $t('esg.chartSub') }}</p>
          <div class="h-72 sm:h-80">
            <Radar :data="chartData" :options="chartOptions" />
          </div>
          <div class="mt-4 flex items-center justify-center gap-2 text-xs text-zinc-500 border-t border-zinc-800 pt-4">
            <span class="h-3 w-3 rounded-full bg-emerald-400" />
            {{ $t('esg.chartLegend') }}
          </div>
        </div>
      </section>

      <p class="text-center text-xs text-zinc-600">
        {{ $t('esg.footer') }}
      </p>
    </div>
  </div>
</template>