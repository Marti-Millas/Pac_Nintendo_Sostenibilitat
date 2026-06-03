<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { Doughnut } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js'
import {
  Flame,
  Zap,
  Globe2,
  BarChart3,
  Info,
} from 'lucide-vue-next'

ChartJS.register(Title, Tooltip, Legend, ArcElement)

const { t } = useI18n()

const total = 2499262

// ── Scope data — computed per reactivitat i18n ───────────
const scopes = computed(() => [
  {
    icon: Flame,
    num: 1,
    label: t('carbon.scope1.label'),
    subtitle: t('carbon.scope1.subtitle'),
    value: 2410,
    pct: ((2410 / total) * 100).toFixed(2),
    color: 'text-sky-400',
    border: 'border-sky-500/30',
    bg: 'bg-sky-500/10',
    hex: '#38bdf8',
    items: [
      t('carbon.scope1.item1'),
      t('carbon.scope1.item2'),
      t('carbon.scope1.item3'),
    ],
  },
  {
    icon: Zap,
    num: 2,
    label: t('carbon.scope2.label'),
    subtitle: t('carbon.scope2.subtitle'),
    value: 14047,
    pct: ((14047 / total) * 100).toFixed(2),
    color: 'text-violet-400',
    border: 'border-violet-500/30',
    bg: 'bg-violet-500/10',
    hex: '#a78bfa',
    items: [
      t('carbon.scope2.item1'),
      t('carbon.scope2.item2'),
      t('carbon.scope2.item3'),
    ],
  },
  {
    icon: Globe2,
    num: 3,
    label: t('carbon.scope3.label'),
    subtitle: t('carbon.scope3.subtitle'),
    value: 2482803,
    pct: ((2482803 / total) * 100).toFixed(2),
    color: 'text-nintendo',
    border: 'border-nintendo/30',
    bg: 'bg-nintendo/10',
    hex: '#E60012',
    items: [
      t('carbon.scope3.item1'),
      t('carbon.scope3.item2'),
      t('carbon.scope3.item3'),
    ],
  },
])

// ── Doughnut Chart — computed per reactivitat i18n ───────
const chartData = computed(() => ({
  labels: [
    t('carbon.chartLabel1'),
    t('carbon.chartLabel2'),
    t('carbon.chartLabel3'),
  ],
  datasets: [
    {
      data: [2410, 14047, 2482803],
      backgroundColor: [
        'rgba(56,189,248,0.85)',
        'rgba(167,139,250,0.85)',
        'rgba(230,0,18,0.85)',
      ],
      borderColor: ['#38bdf8', '#a78bfa', '#E60012'],
      borderWidth: 2,
      hoverOffset: 8,
    },
  ],
}))

const chartOptions = computed(() => ({
  responsive: true,
  maintainAspectRatio: false,
  cutout: '68%',
  plugins: {
    legend: {
      position: 'bottom',
      labels: {
        color: '#a1a1aa',
        font: { size: 12 },
        padding: 16,
        usePointStyle: true,
        pointStyleWidth: 10,
      },
    },
    tooltip: {
      backgroundColor: '#18181b',
      borderColor: '#3f3f46',
      borderWidth: 1,
      titleColor: '#f4f4f5',
      bodyColor: '#a1a1aa',
      padding: 12,
      callbacks: {
        label: (ctx) => {
          const pct = ((ctx.parsed / total) * 100).toFixed(2)
          return ` ${ctx.parsed.toLocaleString('ca-ES')} ${t('carbon.tooltipUnit')} (${pct}%)`
        },
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
      <div class="pointer-events-none absolute -left-10 top-0 h-full w-1 bg-gradient-to-b from-transparent via-violet-500 to-transparent opacity-60" />

      <div class="relative mx-auto max-w-5xl">
        <div class="mb-4 flex items-center gap-2">
          <BarChart3 :size="16" class="text-violet-400" />
          <span class="text-xs font-semibold uppercase tracking-widest text-violet-400">{{ $t('carbon.tag') }}</span>
        </div>
        <h1 class="mb-4 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
          {{ $t('carbon.title1') }}<br>
          <span class="text-violet-400">{{ $t('carbon.title2') }}</span>
        </h1>
        <p class="max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-base">
          {{ $t('carbon.subtitle') }}
        </p>
      </div>
    </div>

    <!-- ── Main content ────────────────────────────────── -->
    <div class="mx-auto max-w-6xl px-4 py-16 space-y-16">

      <!-- Total emissions banner -->
      <div class="relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 px-6 py-6 sm:px-10 sm:py-8">
        <div class="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-nintendo/10 blur-[60px]" />
        <div class="relative flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <p class="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-1">{{ $t('carbon.totalLabel') }}</p>
            <p class="text-4xl sm:text-5xl font-black tracking-tight text-nintendo">
              2.499.262
              <span class="text-xl font-semibold text-zinc-400">{{ $t('carbon.unit') }}</span>
            </p>
          </div>
          <div class="flex items-start gap-2 max-w-sm text-sm text-zinc-400">
            <Info :size="14" class="mt-0.5 shrink-0 text-zinc-500" />
            {{ $t('carbon.totalNote') }}
          </div>
        </div>
      </div>

      <!-- Scope cards + chart row -->
      <div class="grid gap-8 lg:grid-cols-2 items-start">

        <!-- Scope cards -->
        <div class="space-y-4">
          <h2 class="mb-6 text-xl font-bold">{{ $t('carbon.breakdownTitle') }}</h2>
          <div
            v-for="scope in scopes"
            :key="scope.num"
            class="group rounded-2xl border p-5 transition-all duration-300 hover:bg-zinc-900"
            :class="[scope.border, scope.bg]"
          >
            <div class="flex items-start justify-between mb-3">
              <div class="flex items-center gap-3">
                <span
                  class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-black"
                  :style="`background:${scope.hex}22; color:${scope.hex}`"
                >
                  {{ scope.num }}
                </span>
                <div>
                  <p class="text-sm font-semibold leading-tight" :class="scope.color">{{ scope.label }}</p>
                  <p class="text-xs text-zinc-500">{{ scope.subtitle }}</p>
                </div>
              </div>
              <div class="text-right">
                <p class="text-lg font-black" :class="scope.color">{{ scope.value.toLocaleString('ca-ES') }}</p>
                <p class="text-[10px] text-zinc-500 uppercase tracking-wider">{{ $t('carbon.unit') }}</p>
              </div>
            </div>

            <!-- percentage bar -->
            <div class="mb-3 h-1 w-full rounded-full bg-zinc-800">
              <div
                class="h-full rounded-full transition-all duration-700"
                :style="`width:${scope.pct}%; background:${scope.hex}`"
              />
            </div>

            <ul class="space-y-1">
              <li
                v-for="item in scope.items"
                :key="item"
                class="flex items-start gap-2 text-xs text-zinc-400 leading-relaxed"
              >
                <component :is="scope.icon" :size="10" class="mt-1 shrink-0" :class="scope.color" />
                {{ item }}
              </li>
            </ul>
          </div>
        </div>

        <!-- Doughnut chart -->
        <div class="sticky top-24">
          <div class="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 sm:p-8">
            <h2 class="mb-1 text-xl font-bold">{{ $t('carbon.chartTitle') }}</h2>
            <p class="mb-6 text-sm text-zinc-500">{{ $t('carbon.chartSub') }}</p>
            <div class="h-72 sm:h-80">
              <Doughnut :data="chartData" :options="chartOptions" />
            </div>
            <div class="mt-6 grid grid-cols-3 gap-3 border-t border-zinc-800 pt-5 text-center text-xs text-zinc-500">
              <div>
                <p class="font-semibold text-sky-400 text-sm">{{ ((2410 / total) * 100).toFixed(2) }}%</p>
                <p>{{ $t('carbon.pctLabel1') }}</p>
              </div>
              <div>
                <p class="font-semibold text-violet-400 text-sm">{{ ((14047 / total) * 100).toFixed(2) }}%</p>
                <p>{{ $t('carbon.pctLabel2') }}</p>
              </div>
              <div>
                <p class="font-semibold text-nintendo text-sm">{{ ((2482803 / total) * 100).toFixed(2) }}%</p>
                <p>{{ $t('carbon.pctLabel3') }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p class="text-center text-xs text-zinc-600">
        {{ $t('carbon.footer') }}
      </p>
    </div>
  </div>
</template>