// classes
// methods
// properties

class Car {
    constructor(name, color, topSpeed, currentSpeed){
        // this is referencing the object 'ferrari'
        this.name = name
        this.color = color
        this.topSpeed = topSpeed
        this.currentSpeed = 0;
    }

    // getters and setters
    getCurrentSpeed(){
        return this.currentSpeed;
    }

    zeroTosixty(){
        setTimeout(() => {
            console.log('This car can go fast, like 0 to 60 in 2.9 seconds');
            //this.currentSpeed = 60;
            console.log(this.currentSpeed)
        }, 3000);
    }
   
    // method can only be inside classes
    // methods are functions that are attached to the object
    // start, drive, brake, stop methods

    start(){
        console.log(`The engines of the ${this.name} started, and the top speed is ${this.topSpeed} mph!`)
    }

    drive(){
    // drive(speed=10){
        // this.currentSpeed += speed
        this.currentSpeed += 10
        console.log(`The ${this.name} is accelarated to ${this.currentSpeed} mph`)
    }
    // brake method
    brake(){
        this.currentSpeed -= 10
        console.log('Brakes applied: Speed is down by 10!')
    }
    stop(){
        console.log(`Hand brake was applied, it took 5 seconds to stop!`)
        this.currentSpeed = 0;
        console.log(`The car is now stopped at ${this.currentSpeed} mph`)
    }
}

const ferrari = new Car('Ferrari', 'red', 300)
const porsche = new Car('porsche', 'blue', 250)

porsche.start()
// porsche.drive(40)
// porsche.drive(80)
console.log(porsche.currentSpeed)

// looped the drive method 5 times
// as the arrays are classtype array we need to intantiate them first
const pnums = [1, 2, 3, 4, 5]
pnums.forEach(_ => porsche.drive())

porsche.zeroTosixty()
porsche.stop()

// console.log(porsche.currentSpeed)
// porsche.brake()
// porsche.brake()
// console.log(porsche.currentSpeed)

// testing code for ferrari
// ferrari.zeroTosixty()
// ferrari.start()
// const fnums = [1, 2, 3, 4, 5, 6]
// fnums.forEach(_ => ferrari.drive())
// console.log(ferrari.currentSpeed)

// ferrari.brake()
// ferrari.brake()
// console.log(ferrari.currentSpeed)

// ferrari.stop()