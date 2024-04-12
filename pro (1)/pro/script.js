const searchButton = document.getElementById('search-button');
const cityInput = document.getElementById('city-input');
const weatherInfoContainer = document.getElementById('weather-info');
const searchResultsDiv = document.querySelector('.search-results');
const searchQuerySpan = document.getElementById('search-query');
const locationDiv = document.querySelector('.Location');
const descriptionDiv = document.querySelector('.Description');

// Event listener for search button
searchButton.addEventListener('click', () => {
  searchButton.style.backgroundColor = 'blue';
  const cityName = cityInput.value.trim();
  if (cityName) {
    getWeatherData(cityName);
  }
});

// Function to fetch weather data from db.json
function getWeatherData(cityName) {
  // Fetch the db.json file
  fetch('db.json')
    .then(response => response.json())
    .then(data => {
      const city = data.cities.find(city => city.name.toLowerCase() === cityName.toLowerCase());
      if (city) {
        displayWeatherData(city);
      } else {
        weatherInfoContainer.innerHTML = `<p>No weather forecast found for ${cityName}.</p>`;
      }
    })
    .catch(error => {
      console.error('Error fetching weather data:', error);
    });
}

// Function to display weather data
function displayWeatherData(city) {
  const cityName = city.name;
  const forecastDate = city.forecast.date;
  const temperature = city.forecast.temperature;
  const weatherDescription = city.forecast.weather;

  // Update the search query text
  searchQuerySpan.textContent = cityName;

  // Update location and description
  locationDiv.textContent = `Weather forecast for ${cityName}`;
  descriptionDiv.textContent = `Temperature: ${temperature}°C, Weather: ${weatherDescription}`;

  // Show the search results div
  searchResultsDiv.classList.remove('hidden');

  // Determine the appropriate image based on weather description
  let weatherImage;
switch (weatherDescription) {
  case 'Scattered Thunderstorms':
    weatherImage = 't.jpg';
    break;
  case 'Rain Showers':
    weatherImage = 'r.jpg';
    break;
  case 'Partly Cloudy':
    weatherImage = 'clody.jpg';
    break;
  case 'Sunny':
    weatherImage = 'image.png';
    break;
  default:
    weatherImage = 'image1.png'; // Default image if weather not specified
    break;
}

  // Update the image source
  const imageElement = document.querySelector('.results img');
  imageElement.src = `images/${weatherImage}`;
  imageElement.alt = weatherDescription;
}

const citiesWeather = [
  { city: 'New York', temperature: '20°C', weather: 'Sunny' },
  { city: 'London', temperature: '15°C', weather: 'Cloudy' },
  { city: 'Paris', temperature: '18°C', weather: 'Partly Cloudy' },
  { city: 'Tokyo', temperature: '22°C', weather: 'Rainy' },
  { city: 'Sydney', temperature: '25°C', weather: 'Clear' }
];

let slideIndex = 0;

function showSlides() {
  const cityWeather = citiesWeather[slideIndex];
  const slideContent = document.createElement('div');
  slideContent.classList.add('slide-content');
  slideContent.innerHTML = `
    <h2>${cityWeather.city}</h2>
    <p>Temperature: ${cityWeather.temperature}</p>
    <p>Weather: ${cityWeather.weather}</p>
  `;
  document.querySelector('.headerimage').innerHTML = '';
  document.querySelector('.headerimage').appendChild(slideContent);
  slideIndex++;
  if (slideIndex >= citiesWeather.length) {
    slideIndex = 0;
  }
  setTimeout(showSlides, 3000); // Change slide every 3 seconds
}

showSlides();
