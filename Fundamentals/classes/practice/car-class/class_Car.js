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
   
    // methods are functions that are attached to the object
    // drive method

    start(){
        console.log(`The engines of the ${this.name} started, and the top speed is ${this.topSpeed} mph!`)
    }

    drive(){
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

// console.log(ferrari.name)
// console.log(ferrari.color)
// console.log(ferrari.TopSpeed)

// testing code for ferrari
// ferrari.zeroTosixty()
// ferrari.start()
// ferrari.drive()
// ferrari.drive()
// ferrari.drive()
// ferrari.drive()
// ferrari.drive()
// ferrari.drive()
// console.log(ferrari.currentSpeed)

// ferrari.brake()
// ferrari.brake()
// console.log(ferrari.currentSpeed)

// ferrari.stop()

porsche.start()
// looped the drive method 5 times
// as the arrays are classtype array we need to intantiate them first
const nums = [1, 2, 3, 4, 5]
nums.forEach(_ => porsche.drive())
console.log(porsche.getCurrentSpeed())
porsche.zeroTosixty()
porsche.stop()

console.log(porsche.currentSpeed)

// porsche.brake()
// porsche.brake()
// console.log(porsche.currentSpeed)


