// url: https://superheroapi.com/api.php/2559147114220333/245

const getSuperHero = () => {
    fetch('https://superheroapi.com/api/2559147114220333/245')
    .then(response => response.json())
    .then(json => console.log(json))
}

getSuperHero()