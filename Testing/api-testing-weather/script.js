fetch('https://api.openweathermap.org/data/2.5/weather?q=dhaka&appid=a8e71c9932b20c4ceb0aed183e6a83bb')
	.then(response => response.json())
	.then(data => console.log(data.main))
	.catch(err => console.error(err));