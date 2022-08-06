const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'feb34cd0d4msh13dc2e0076805f9p17c16fjsn285a02a07c45',
		'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com'
	}
};

fetch('https://community-open-weather-map.p.rapidapi.com/weather?q=Dhaka%2Cbd&units=imperial', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));