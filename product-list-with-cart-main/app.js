const { createApp, ref, onMounted } = Vue

createApp({
  setup() {
    const data = ref('')
    const my_name = ref('')
    onMounted(async()=>{
      const res = await fetch('./data.json')
      data.value = await res.json()
    })
    const message = ref('Successfully Imported Data using CDN!')
    console.log("my_name", my_name.value)
    return {
      message,
      data,
      my_name,
    }
  }
}).mount('#app')
