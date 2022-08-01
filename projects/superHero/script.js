// url: https://superheroapi.com/api.php/2559147114220333/245

// api cant be fetched, getting ssl error. Moving on.

const superheroToken = '2559147114220333';
const baseUrl = `https://superheroapi.com/api.php/${superheroToken}/`

const getSuperHero = (id, name) => {
    fetch(`${baseUrl}/${id}`)
    .then(response => response.json())
    .then(json => {
        console.log(json)
        document.querySelector('body').innerHTML += `<img src="${json.image.url}" height=200 width=200/>`
    })
}

getSuperHero(20)

const img = 'https://superherodb.com/pictures2/portraits/10/100/1390.jpg'