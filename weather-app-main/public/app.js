const { createApp, ref, onMounted, onUpdated } = Vue

createApp({
    setup(){
        const data = ref('')
        const waffles_data = ref('')
        onMounted(async()=>{
        // onUpdated(async()=>{
            const res = await fetch('./mydata.json')
            waffles_data.value = await res.json()
            console.log("data", data.value[0])
            const url2 = "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m&current=precipitation,wind_speed_10m,relative_humidity_2m,temperature_2m"
            // const url2 = "https://api.open-meteo.com/v1/forecast?latitude=32.938&longitude=-96.95&hourly=temperature_2m&current=precipitation,wind_speed_10m,relative_humidity_2m,temperature_2m"
            const res2 = await fetch (url2)
            data.value = await res2.json()
            console.log("data", data.value)
            console.log("data", data.value.current.precipitation)
        })
        return {
            waffles_data,
            data,
        }
    }
}).mount('#app')