/**
 * Weather App
 * TODO: Complete getWeatherData() to return json response Promise
 * TODO: Complete searchCity() to get user input and get data using getWeatherData()
 * TODO: Complete showWeatherData() to set the data in the the html file from response
 */

// API_KEY for maps api
API_KEY = 'a8e71c9932b20c4ceb0aed183e6a83bb'

/**
 * Retrieve weather data from openweathermap
 * HINT: Use fetch()
 * HINT: URL should look like this: 
 * https://api.openweathermap.org/data/2.5/weather?q=detroit&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial
 */
getWeatherData = () => {
  //HINT: Use template literals to create a url with input and an API key
  //CODE GOES HERE


  // fetch('https://api.openweathermap.org/data/2.5/weather?q=dhaka&appid=a8e71c9932b20c4ceb0aed183e6a83bb')
	// .then(response => response.json())
	// .then(data => console.log(data.weather[0].main))
	// .catch(err => console.error(err));

}

/**
 * Retrieve city input and get the weather data
 * HINT: Use the promise returned from getWeatherData()
 */
searchCity = () => {
  const city = document.getElementById('city-input').value;
  console.log(city)

}

/**
 * Show the weather data in HTML
 * HINT: make sure to console log the weatherData to see how the data looks like
 */
showWeatherData = (weatherData) => {
  //CODE GOES HERE
  
}

