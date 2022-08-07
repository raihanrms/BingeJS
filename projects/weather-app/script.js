/**
 * Weather App
 * Completed getWeatherData() to return json response Promise
 * Completed searchCity() to get user input and get data using getWeatherData()
 * Completed showWeatherData() to set the data in the the html file from response
 */

// API_KEY for maps api
let API_KEY = 'a8e71c9932b20c4ceb0aed183e6a83bb';

getWeatherData = async (city) => {
  const URL = 'https://api.openweathermap.org/data/2.5/weather';
  const FULL_URL = `${URL}?q=${city}&appid=${API_KEY}&units=imperial`;
  const weatherPromise = fetch(FULL_URL);
  const response = await weatherPromise;
  return await response.json();
}

const searchCity = async () => {
  const city = document.getElementById('city-input').value;
  getWeatherData(city).then((res) => {
    showWeatherData(res);
  }).catch((error) => {
    console.log(error);
    console.log("Something happend");
  })
}

const showWeatherData = (weatherData) => {  
  // console.log(weatherData.main.temp)
  document.getElementById('temp').innerText = weatherData.main.temp
  document.getElementById('city-name').innerText = weatherData.name
  document.getElementById('weather-type').innerText = weatherData.weather[0].main
  document.getElementById('min-temp').innerText = weatherData.main.temp_min
  document.getElementById('max-temp').innerText = weatherData.main.temp_max
  document.getElementById("weather-output").classList.add('visible');
}

