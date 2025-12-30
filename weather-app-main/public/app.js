import { getWeather, getLocation } from './apis.js';
import {createDailyForecast, createHourlyForecast, createHoursArray, getWeatherIcon, getCurrentDate,
toggleToImperial, toggleUnit} from "./utils.js";

const { createApp, ref, reactive, onMounted, watch } = Vue

createApp({
    setup(){
        const weather = ref('')
        const dailyForecast = ref({
            weekdays: [],
            weekdays_long: [],
            temp_high: [],
            temp_low: [],
            dayIndex : 0,
        });
        const hourlyForecast = ref({
           0 : [], // This index will store values for the current day
           1 : [],
           2 : [],
           3 : [],
           4 : [],
           5 : [],
           6 : [],
        })
        const isUnitsDisplayed = ref(false);
        const isOverlay = ref(false);
        
        const isSelected = ref({
            imperial: false,
            celsius: true,
            fahrenheit: false,
            kmh: true,
            mph: false,
            mm: true,
            inch: false,
        })
        const weather_units = reactive({
            wind_unit: 'kmh',
            temp_unit: 'celsius',
            prec_unit: 'mm',
        });
        const city = ref('');
        const location = ref('');
        const hours = ref([])

        const updateData = async ()=>{
            /* Get api data (lat, long, weather etc.) and store in local variables
            * */
            // console.log("updateData")
            location.value = await getLocation(city.value || 'dallas');
            weather.value = await getWeather(location.value[0].latitude, location.value[0].longitude,
                weather_units.wind_unit, weather_units.temp_unit, weather_units.prec_unit);
            createDailyForecast(weather, dailyForecast)
            createHourlyForecast(weather, hourlyForecast)
            hours.value = createHoursArray(dailyForecast.value.dayIndex)
        }
        
        const onDayChange = () => {
            /* Populate a local array variable on User selecting a different weekday
            * */
            hours.value = createHoursArray(dailyForecast.value.dayIndex)
        }

        const toggleUnitsDropdown = () =>{
            /* Toggle the dropdown to display the Imperial vs Metric Options
            * */
            // console.log("toggleUnitsDropdown", )
            isUnitsDisplayed.value = !isUnitsDisplayed.value;
            isOverlay.value = !isOverlay.value;
            return isUnitsDisplayed.value

        }
        const closeModal = () => {
            isOverlay.value = false;
            isUnitsDisplayed.value = false;
        }
        onMounted(async()=>{
            updateData()
        })
        
        
        watch(weather_units, (newVal, oldVal) => {
            // console.log(`oldVal is: ${oldVal}, newVal is: ${newVal}`)
            updateData();
        }, {deep: true})

        return {
            city,
            hours,
            updateData,
            location,
            dailyForecast,
            weather_units,
            weather,
            hourlyForecast,
            isSelected,
            getWeatherIcon,
            getCurrentDate,
            onDayChange,
            toggleUnitsDropdown,
            toggleToImperial,
            toggleUnit,
            isUnitsDisplayed,
            closeModal,
            isOverlay,
        }
    }
}).mount('#app')