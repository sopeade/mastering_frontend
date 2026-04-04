<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import {
  Chart,
  DoughnutController,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js'

// Register what you use (required in Chart.js v3+)
Chart.register(
  DoughnutController,
  ArcElement,
  Tooltip,
  Legend
)

const canvasRef = ref(null)
const centerRef = ref(null)
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
  centerText: {
    type: String,
    default: '',
  },
  centerLimit: {
    type: String,
    default: '',
  }
})

onMounted(() => {

  // Custom plugin to render center text
  const centerTextPlugin = {
    id: 'centerText', // Unique plugin ID
    beforeDraw: (chart) => {
        // Get chart context and dimensions
        const { ctx, width, height } = chart;
        ctx.save(); // Save current context state

        // Calculate center coordinates
        const centerX = width / 2;
        const centerY = height / 2;
        const topY = height /2.5;
        const bottomY = height /1.9;

        // Text content
        const text1 = props.centerText.length > 0 ? `$${props.centerText}`: ''; // Replace with dynamic value
        // Text styling
        ctx.font = 'bold 32px Arial'; // Font size and family
        ctx.fillStyle = '#333'; // Text color
        ctx.textAlign = 'center'; // Horizontal alignment
        ctx.textBaseline = 'middle'; // Vertical alignment

        ctx.fillText(text1, centerX, topY); // Draw text at center

        // Text content
        const text2 = props.centerLimit.length > 0 ? `of $${props.centerLimit} limit` : ''; // Replace with dynamic value

        // Text styling
        ctx.font = '12px Arial'; // Font size and family
        ctx.fillStyle = '#333'; // Text color
        ctx.textAlign = 'center'; // Horizontal alignment
        ctx.textBaseline = 'middle'; // Vertical alignment

        ctx.fillText(text2, centerX, bottomY); // Draw text at center
        ctx.restore(); // Restore context state
    }
  };

  // Custom plugin to render light shaded div overlay
  const lightRadialCutoutPlugin = {
    id: 'centerDivPlugin',
    afterDraw(chart) {
      const { chartArea } = chart
      const centerX = (chartArea.left + chartArea.right) / 2
      const centerY = (chartArea.top + chartArea.bottom) / 2

      if (centerRef.value) {
        centerRef.value.style.left = `${centerX}px`
        centerRef.value.style.top = `${centerY}px`
      }
    }
  }

  // Set chart type, data & options
  const config = {
    type: 'doughnut',
    data: {
      labels: props.labels,
      datasets: [
        {
          data: props.data,
          backgroundColor: [
            '#ef4444', // red-500
            '#22c55e', // green-500
            '#3b82f6', // blue-500
            '#f59e0b', // amber-500
            '#a855f7', // purple-500
          ],
          borderWidth: 0,

        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: '65%',
      plugins: {
        legend: {
          position: 'bottom',
        },
        centerText: {
          text: '75%',
          color: '#333',
          fontSize: 24,
        }
      },
    },
    plugins: [centerTextPlugin, lightRadialCutoutPlugin]
    // plugins: [lightRadialCutoutPlugin]
  }

  chartInstance = new Chart(canvasRef.value, config)
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
  <div class="relative h-60 max-w-70">
    <canvas ref="canvasRef"></canvas>
    <div ref="centerRef"
      class="absolute -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
      <div class="w-45 h-45 bg-[rgba(255,255,255,0.257)] border border-[rgba(255,255,255,0.15)]
           rounded-full shadow-[3px_3px_3px_rgba(0,0,0,0.089)]
           mask-[radial-gradient(circle,transparent_57%,black_58%,black_100%)]">
      </div>
    </div>
  </div>
</template>