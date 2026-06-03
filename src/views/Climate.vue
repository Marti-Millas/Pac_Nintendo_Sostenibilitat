<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { Bar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from 'chart.js'
import {
  Thermometer,
  AlertTriangle,
  CloudLightning,
  Server,
  ArrowRight,
  ShieldAlert,
} from 'lucide-vue-next'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const { t } = useI18n()

// ── Risk cards — computed per reactivitat i18n ───────────
const risks = computed(() => [
  {
    icon: CloudLightning,
    title: t('climate.risk1.title'),
    score: 8,
    color: 'text-orange-400',
    border: 'border-orange-500/30',
    bg: 'bg-orange-500/10',
    bar: 'bg-orange-400',
    items: [
      t('climate.risk1.item1'),
      t('climate.risk1.item2'),
      t('climate.risk1.item3'),
    ],
  },
  {
    icon: ShieldAlert,
    title: t('climate.risk2.title'),
    score: 6,
    color: 'text-yellow-400',
    border: 'border-yellow-500/30',
    bg: 'bg-yellow-500/10',
    bar: 'bg-yellow-400',
    items: [
      t('climate.risk2.item1'),
      t('climate.risk2.item2'),
      t('climate.risk2.item3'),
    ],
  },
  {
    icon: Server,
    title: t('climate.risk3.title'),
    score: 9,
    color: 'text-nintendo',
    border: 'border-nintendo/30',
    bg: 'bg-nintendo/10',
    bar: 'bg-nintendo',
    items: [
      t('climate.risk3.item1'),
      t('climate.risk3.item2'),
      t('climate.risk3.item3'),
    ],
  },
])

// ── Bar Chart — computed per reactivitat i18n ────────────
const chartData = computed(() => ({
  labels: [
    t('climate.risk1.title'),
    t('climate.risk2.title'),
    t('climate.risk3.title'),
  ],
  datasets: [
    {
      label: t('climate.chartTitle'),
      data: [8, 6, 9],
      backgroundColor: [
        'rgba(251, 146, 60, 0.85)',
        'rgba(250, 204, 21, 0.85)',
        'rgba(230, 0, 18, 0.85)',
      ],
      borderColor: [
        'rgba(251, 146, 60, 1)',
        'rgba(250, 204, 21, 1)',
        'rgba(230, 0, 18, 1)',
      ],
      borderWidth: 2,
      borderRadius: 8,
      borderSkipped: false,
    },
  ],
}))

const chartOptions = computed(() => ({
  responsive: true,
  maintainAspectRatio: false,
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
        label: (ctx) => ` ${t('climate.chartTitle')}: ${ctx.parsed.y} / 10`,
      },
    },
  },
  scales: {
    x: {
      grid: { color: 'rgba(255,255,255,0.05)' },
      ticks: { color: '#71717a', font: { size: 12 } },
    },
    y: {
      min: 0,
      max: 10,
      grid: { color: 'rgba(255,255,255,0.05)' },
      ticks: {
        color: '#71717a',
        font: { size: 11 },
        stepSize: 2,
        callback: (v) => `${v}/10`,
      },
    },
  },
}))
</script>

<template>
  <div class="min-h-screen bg-zinc-950 text-white">

    <!-- ── Page header ─────────────────────────────────── -->
    <div class="relative overflow-hidden border-b border-zinc-800 bg-zinc-900/50 px-4 py-14 sm:py-20">
      <div class="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div class="pointer-events-none absolute -left-10 top-0 h-full w-1 bg-gradient-to-b from-transparent via-orange-500 to-transparent opacity-60" />

      <div class="relative mx-auto max-w-5xl">
        <div class="mb-4 flex items-center gap-2">
          <Thermometer :size="16" class="text-orange-400" />
          <span class="text-xs font-semibold uppercase tracking-widest text-orange-400">{{ $t('climate.tag') }}</span>
        </div>
        <h1 class="mb-4 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
          {{ $t('climate.title1') }}<br>
          <span class="text-orange-400">{{ $t('climate.title2') }}</span>
        </h1>
        <p class="max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-base">
          {{ $t('climate.subtitle') }}
        </p>
      </div>
    </div>

    <!-- ── Main content ────────────────────────────────── -->
    <div class="mx-auto max-w-6xl px-4 py-16 space-y-16">

      <!-- Risk cards -->
      <section>
        <h2 class="mb-8 flex items-center gap-2 text-xl font-bold">
          <AlertTriangle :size="18" class="text-orange-400" />
          {{ $t('climate.mapTitle') }}
        </h2>

        <div class="grid gap-5 sm:grid-cols-3">
          <div
            v-for="risk in risks"
            :key="risk.title"
            class="group rounded-2xl border p-6 transition-all duration-300 hover:bg-zinc-900"
            :class="[risk.border, risk.bg]"
          >
            <!-- header -->
            <div class="mb-5 flex items-start justify-between">
              <div class="flex items-center gap-2">
                <component :is="risk.icon" :size="18" :class="risk.color" />
                <span class="text-sm font-semibold" :class="risk.color">{{ risk.title }}</span>
              </div>
              <div class="flex flex-col items-end">
                <span class="text-2xl font-black" :class="risk.color">{{ risk.score }}</span>
                <span class="text-[10px] text-zinc-500 uppercase tracking-wider">/ 10</span>
              </div>
            </div>

            <!-- risk bar -->
            <div class="mb-5 h-1.5 w-full rounded-full bg-zinc-800">
              <div
                class="h-full rounded-full transition-all duration-700"
                :class="risk.bar"
                :style="`width: ${risk.score * 10}%`"
              />
            </div>

            <!-- items -->
            <ul class="space-y-2">
              <li
                v-for="item in risk.items"
                :key="item"
                class="flex items-start gap-2 text-xs text-zinc-400 leading-relaxed"
              >
                <ArrowRight :size="12" class="mt-0.5 shrink-0" :class="risk.color" />
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Chart section -->
      <section class="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 sm:p-8">
        <div class="mb-6">
          <h2 class="mb-1 text-xl font-bold">{{ $t('climate.chartTitle') }}</h2>
          <p class="text-sm text-zinc-500">{{ $t('climate.chartDesc') }}</p>
        </div>
        <div class="h-64 sm:h-80">
          <Bar :data="chartData" :options="chartOptions" />
        </div>
        <div class="mt-5 grid grid-cols-3 gap-3 border-t border-zinc-800 pt-5">
          <div v-for="risk in risks" :key="risk.title" class="text-center">
            <p class="text-xs text-zinc-500 mb-1">{{ risk.title }}</p>
            <p class="text-2xl font-black" :class="risk.color">
              {{ risk.score }}<span class="text-xs font-normal text-zinc-600">/10</span>
            </p>
          </div>
        </div>
      </section>

      <!-- Note -->
      <p class="text-center text-xs text-zinc-600">
        {{ $t('climate.footer') }}
      </p>
    </div>
  </div>
</template>