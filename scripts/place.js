// Set Last Modified Date
document.getElementById('last-modified').textContent = document.lastModified;

// Function to calculate Wind Chill
const calculateWindChill = (temp, windSpeed) => {
    if (temp <= 10 && windSpeed > 4.8) {
        return (13.12 + 0.6215 * temp - 11.37 * windSpeed ** 0.16 + 0.3965 * temp * windSpeed ** 0.16).toFixed(1) + "°C";
    } else if (temp > 10) {
        return "Wind Chill Not Applicable";
    } else {
        return "N/A";
    }
};

// Set Wind Chill dynamically
const temp = 10;
const windSpeed = 5;
document.getElementById('windchill').textContent = calculateWindChill(temp, windSpeed);

// Weather Conditions to Icon Mapping
const weatherConditions = {
    "Partly Cloudy": "images/partly-cloudy.svg",
    "Sunny": "images/sunny.svg",
    "Rainy": "images/rainy.svg",
    "Default": "images/default-weather.svg"
};

// Function to dynamically change the weather icon based on conditions
const updateWeatherIcon = (condition) => {
    const icon = document.getElementById('weather-icon');
    icon.src = weatherConditions[condition] || weatherConditions["Default"];
};

// Example condition to change the weather icon
updateWeatherIcon("Partly Cloudy");


// Function to dynamically update the weather data
const updateWeather = (weatherData) => {
    const temp = weatherData.temperature;
    const windSpeed = weatherData.windSpeed;
    const condition = weatherData.condition;

    document.getElementById('temperature').textContent = temp + "°C";
    document.getElementById('wind-speed').textContent = windSpeed + " km/h";
    document.getElementById('windchill').textContent = calculateWindChill(temp, windSpeed);
    updateWeatherIcon(condition);
};

// Example of calling the function with mock data
const mockWeatherData = {
    temperature: 10,
    windSpeed: 5,
    condition: "Partly Cloudy"
};

updateWeather(mockWeatherData);
