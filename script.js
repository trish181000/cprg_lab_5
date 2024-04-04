// Define cities
const cities = ['New York', 'London', 'Tokyo', 'Paris', 'Berlin'];

// Populate dropdown menu with cities
function populateCities() {
    const citySelect = document.getElementById('citySelect');
    cities.forEach(city => {
        const option = document.createElement('option');
        option.textContent = city;
        option.value = city;
        citySelect.appendChild(option);
    });
}

window.onload = populateCities;

// Fetch weather data
function getWeather() {
    const citySelect = document.getElementById('citySelect');
    const apiKey = 'e5a74c9024898c21b9f8b500318559f4';
    const city = citySelect.value; // Get the selected city from the dropdown menu
    const weatherCard = document.getElementById('weatherCard');

    fetch(`http://api.weatherstack.com/current?access_key=${apiKey}&query=${city}`)
        .then(response => response.json())
        .then(data => {
            const temperature = data.current.temperature;
            const weatherDescription = data.current.weather_descriptions[0];
            const weatherIcon = data.current.weather_icons[0];
            weatherCard.innerHTML = `<h2>Current Weather in ${city}</h2>
                     <p>Temperature: ${temperature}°C</p>
                     <p>Weather: ${weatherDescription}</p>
                     <img src="${weatherIcon}" alt="Weather Icon">`;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            weatherCard.innerHTML = `<p>Sorry! Can't load the weather data right now. Please try again.</p>`;
        });
}
