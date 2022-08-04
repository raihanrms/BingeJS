const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4a0b4476d5msh56ea7354a2dad35p15571djsn64fbcb4ba08e',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

fetch('https://weatherapi-com.p.rapidapi.com/future.json?q=London&dt=2022-12-25', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));