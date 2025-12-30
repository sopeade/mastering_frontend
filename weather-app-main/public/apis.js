
export const getLocation = async(city)=>{
    /* Get Latitude and longitude information given a city name
    * */
    const url = `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=10&language=en&format=json`
    try {
        const response = await fetch(url);
        if (!response.ok){
            // throw new Error(`Error: ${response.status}`)
            console.log(`Error: ${response.status}`)
        }
        const data = await response.json();
        // console.log("data", data)
        return data.results;
    }
    catch (error) {
        console.log(`Error: ${error}`)
    }
}

export const getWeather = async (lat, long, wind_unit, temp_unit, prec_unit)=> {
    /* Get detailed weather data from the open meteo api, given
    a locations latitude, longitude & weather unit information.
    * */
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&daily=weather_code,temperature_2m_max,temperature_2m_min&hourly=temperature_2m,weather_code&current=temperature_2m,relative_humidity_2m,precipitation,weather_code,wind_speed_10m,apparent_temperature&wind_speed_unit=${wind_unit}&temperature_unit=${temp_unit}&precipitation_unit=${prec_unit}`
    try {
        const response = await fetch(url);
        if(!response.ok) {
            console.log(`Error: ${response.status}`)
            return
        }
        const data = await response.json();
        // console.log("weather data:", data);
        return data;
    } catch (error) {
        console.log(error.message);
    }
}

