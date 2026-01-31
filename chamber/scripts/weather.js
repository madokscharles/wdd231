// Select HTML elements
const town = document.querySelector("#town");
const weatherIcon = document.querySelector("#weather-icon");
const description = document.querySelector("#description");
const temperature = document.querySelector("#temperature");
const forecast = document.querySelector("#forecast");

// OpenWeather API details
const apiKey = "944ba44088bb0cafb9c93585c28ba580";
const lat = "4.8156";     // Port Harcourt latitude
const lon = "7.0498";     // Port Harcourt longitude

// Current weather URL
const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

// Forecast URL
const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

// FETCH CURRENT WEATHER
async function getWeather() {
    try {
        const response = await fetch(weatherURL);
        if (!response.ok) throw Error(await response.text());

        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        console.error("Weather error:", error);
    }
}

function displayWeather(data) {
    town.textContent = data.name;
    temperature.innerHTML = `${Math.round(data.main.temp)}&deg;C`;
    description.textContent = data.weather[0].description;

    const iconSrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    weatherIcon.setAttribute("src", iconSrc);
    weatherIcon.setAttribute("alt", data.weather[0].description);
}

// FETCH 3-DAY FORECAST
async function getForecast() {
    try {
        const response = await fetch(forecastURL);
        if (!response.ok) throw Error(await response.text());

        const data = await response.json();
        displayForecast(data);
    } catch (error) {
        console.error("Forecast error:", error);
    }
}

function displayForecast(data) {
    // Pick one forecast per day (around noon)
    const daily = data.list.filter(item => item.dt_txt.includes("12:00:00"));
    const days = daily.slice(0, 3);

    forecast.innerHTML = "";

    days.forEach(day => {
        const date = new Date(day.dt_txt);
        const dayName = date.toLocaleDateString("en-US", { weekday: "short" });
        const temp = Math.round(day.main.temp);

        forecast.innerHTML += `<span>${dayName}: ${temp}&deg;C</span><br>`;
    });
}

// Run scripts
getWeather();
getForecast();