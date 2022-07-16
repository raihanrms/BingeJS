// function to sum up celebrity networths using reduce

const actors = [
    {name: 'Tom Cruise', age: 56, netWorth: 1500000},
    {name: 'Robert De Niro', age: 25, netWorth: 2500000},
    {name: 'Al Pacino', age: 66, netWorth: 3000000},
    {name: 'Marlon Brando', age: 75, netWorth: 4000000},
    {name: 'Jack Nicholson', age: 45, netWorth: 50000},
    {name: 'Daniel Day-Lewis', age: 60, netWorth: 6000000},
    {name: 'Dustin Hoffman', age: 79, netWorth: 7000000},
]

// sum up the networths of the actors
const sumNetworth = (actors) => {
    return actors.reduce((acc, actor) => acc + actor.netWorth, 0)
}
console.log(sumNetworth(actors))