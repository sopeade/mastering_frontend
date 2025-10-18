const { createApp, ref, onMounted } = Vue

createApp({
  setup() {
    const data = ref('')
    onMounted(async()=>{
      const res = await fetch('./data.json')
      data.value = await res.json()
    })
    const message = ref('Successfully Imported Data using CDN!')
    
    return {
      message,
      data,
    }
  }
}).mount('#app')
