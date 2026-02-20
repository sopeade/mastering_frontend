<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import {
  Chart,
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js'

// Register what you use (required in Chart.js v3+)
Chart.register(
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
)

const canvasRef = ref(null)
let chartInstance = null

const props = defineProps({
  labels: {
    type: Array,
    required: true,
  },
  data: {
    type: Array,
    required: true,
  },
})

onMounted(() => {
  chartInstance = new Chart(canvasRef.value, {
    type: 'bar',
    data: {
      labels: props.labels,
      datasets: [
        {
          label: 'Monthly Spend',
          data: props.data,
          backgroundColor: '#ef4444', // Tailwind red-500
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
    },
  })
})

// 🔥 Reactive updates
watch(
  () => props.data,
  (newData) => {
    chartInstance.data.datasets[0].data = newData
    chartInstance.update()
  }
)

onBeforeUnmount(() => {
  chartInstance?.destroy()
})
</script>

<template>
  <div class="h-64">
    <canvas ref="canvasRef"></canvas>
  </div>
</template>