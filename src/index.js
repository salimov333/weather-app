#!/usr/bin/env node

//console.log("test");
//in terminal: weather or npm run start

//Packages
const axios = require("axios");
require('dotenv').config()
//console.log(process.env); 

//get an print the weather based on a city name
function getWeather() {
    let cityName = process.argv.slice(2); //arr
    const cityLeng = cityName.length;
    if (cityLeng > 1) {
        cityName = cityName.join(" ");
    }
    //console.log(cityName);
    if (cityLeng == 0) console.log("Enter a city name");
    if (cityLeng > 0) {
        const API_KEY = process.env.API_KEY;
        const baseURL = "http://api.weatherapi.com/v1";
        const endPoint = `${baseURL}/current.json?key=${API_KEY}&q=${cityName}`;

        axios
            .get(endPoint)
            .then((res) => {
                const city = res.data.location.name;
                const temp_c = res.data.current.temp_c;
                const condition = res.data.current.condition.text;
                const wind_kph = res.data.current.wind_kph;
                const lastUpdated = res.data.current.last_updated;
                const hour = `${new Date(lastUpdated).getHours()}:${new Date(lastUpdated).getMinutes()}`;
                let result = `The weather today in ${city} at ${hour} is ${condition}. The temperature is ${temp_c}°C and the wind speed is ${wind_kph} km/h.`;
                console.log(result);
            })
            .catch((err) => console.log(err));
    }
}

//to test the app
//type in terminal e.g.: weather Leipzig, weather New York, weather 
getWeather();