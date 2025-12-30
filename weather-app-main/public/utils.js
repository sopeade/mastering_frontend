export const createDailyForecast = (weatherData, dailyForecast) => {
    /* Store temperature highes and lows in local arrays(dailyForecast) for quick retrieval
    * */
    // console.log("createDailyForecast")
    const dates = weatherData.value.daily.time;
    // Populate Weekdays array
    dates.forEach((dateInput) => {
        const date = (dateInput instanceof Date) ? dateInput : new Date(dateInput);
        const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
        const weekdays_long = ["Monday", "Tuesday", "Wednesday", "Thurday", "Friday", "Saturday", "Sunday"];
        dailyForecast.value.weekdays.push(weekdays[date.getDay()])
        dailyForecast.value.weekdays_long.push(weekdays_long[date.getDay()])
    })
    // Populate temp_highs and temp_lows:
    dailyForecast.value.temp_high = weatherData.value.daily.temperature_2m_max;
    dailyForecast.value.temp_low = weatherData.value.daily.temperature_2m_min;
}


export const createHourlyForecast = (weatherData, hourlyForecast) => {
    /* Store hourly weather information in local array for quick retrieval
    * */
    // if inputs are from vue script need to dereference by using .value
    // otherwise if inputs are passed in from template, the template has already unpacked the value
    // however need to use ? with the variables like so a.b?.c?.d
    // console.log("createHourlyForecast")
    const dailyTemps= [];
    const hourlyData = weatherData.value.hourly.temperature_2m;
    const chunkSize = 24;
    for (let i = 0; i < hourlyData.length; i += chunkSize) {
        dailyTemps.push(hourlyData.slice(i, i + chunkSize));
    }
    for (let i=0; i < 7; i++ ){
        hourlyForecast.value[i] = dailyTemps[i];
    }
}


export const createHoursArray = (dayIndex) => {
    /* Array to create AM to PM string array
    * */
    // console.log("createHoursArray")
    const meridiems = ["AM", "PM"];
    const hoursArr = [];
    const hours = ['12', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11']
    const offset = dayIndex * 7;
    for (let val of meridiems){
        for (let hour of hours){
            const time = hour + " " + val;
            hoursArr.push([time, offset])
        }
    }
    return hoursArr
}


export const getWeatherIcon = (code) => {
    /* Key value like structure to retrieve weather code images based on provided weather code
    // https://marinerstudio.com/weather/understanding-weather-code-icons/
    * */
    // console.log(`getWeatherIcon code`);
    if (code === 0 || code === 1 ) return './assets/images/icon-sunny.webp';
    if (code === 2 || code === 3 ) return './assets/images/icon-partly-cloudy.webp';
    if (code === 4 || code === 5 ) return './assets/images/icon-overcast.webp';
    if (code === 11|| code=== 12 ) return './assets/images/icon-fog.webp';
    if (code === 45|| code=== 48 ) return './assets/images/icon-fog.webp';
    if (code >= 50 && code <= 59 ) return './assets/images/icon-drizzle.webp';
    if (code >= 60 && code <= 69 ) return './assets/images/icon-rain.webp';
    if (code >= 70 && code <= 79 ) return './assets/images/icon-snow.webp';
    if (code >= 80 && code <= 84 ) return './assets/images/icon-rain.webp';
    if (code === 85 && code === 86 ) return './assets/images/icon-rain.webp';
    if (code >= 95 && code <= 99 ) return './assets/images/icon-storm.webp';
}


export const getCurrentDate = (weather) => {
    /* Reformat a date 'YYYY/MM/DD' into 'Day, Weekday, Month, year'
    * */
    // console.log("getdate")
    const currDate = weather.current?.time;
    // console.log("currDate", currDate)
    const date = new Date(currDate)
    const dateOptions = { weekday: 'long', day: 'numeric', month: 'short', year: 'numeric' };
    const res = date.toLocaleDateString('en-US', dateOptions);
    return res
}



export const toggleToImperial = (isSelected, weather_units) => {
    /* Toggle the button within the units dropdown to switch from Metric to Imperial units
    and vice-versa
    * */
    console.log("toggleToImperial")
    // console.log("toggleUnits.value.imperial", isSelected.imperial)
    if (isSelected.imperial === false) {
        isSelected.imperial = true;
        isSelected.celsius = false;
        isSelected.kmh = false;
        isSelected.mm = false;
        weather_units.temp_unit = 'fahrenheit'
        weather_units.wind_unit = 'ms'
        weather_units.prec_unit = 'inch'
    }
    else {
        isSelected.imperial = false
        isSelected.celsius = true
        isSelected.kmh = true
        isSelected.mm = true
        weather_units.temp_unit = 'celsius'
        weather_units.wind_unit = 'kmh'
        weather_units.prec_unit = 'mm'
    }
    console.log("weather_units", weather_units)
}


export const toggleUnit = (isSelected, weather_unit, unit, unitPair) => {
    /* Toggle each unit pair (e.g. Celsius to Fahrenheit) and their respective weather units
    * */
    // console.log("toggleUnit", unit)
    isSelected[unit] = !isSelected[unit];
    isSelected[unitPair] = !isSelected[unitPair];
    isSelected['imperial'] = false;
    const wind_unit = ['kmh', 'mph']
    const temp_unit = ['celsius', 'fahrenheit']
    const prec_unit = ['mm', 'inch']
    if (wind_unit.includes(unit)){
        weather_unit['wind_unit'] = weather_unit['wind_unit'] === unit ? unitPair : unit
    } 
    if (temp_unit.includes(unit)){
        weather_unit['temp_unit'] =  weather_unit['temp_unit'] === unit ? unitPair : unit
    } 
    if (prec_unit.includes(unit)){
        weather_unit['prec_unit'] =  weather_unit['prec_unit'] === unit ? unitPair : unit
    }
}