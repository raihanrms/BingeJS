// classes
// methods
// properties

// test code
// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // array class
// nums.push(11); // method call.push

// console.log(nums);

class Car {
    constructor(name, color, topSpeed, currentSpeed){
        // this is referencing the object 'ferrari'
        this.name = name
        this.color = color
        this.topSpeed = topSpeed
        this.currentSpeed = 0;
    }

    // methods are functions that are attached to the object
    // drive method
    drive(){
        this.currentSpeed += 10
        console.log(`The ${this.name} is driving at ${this.speed} mph`)
        console.log(`The ${this.name} is driving at ${this.currentSpeed} mph`)
    }
    // brake method
    brake(){
        console.log(`The brakes were applied and the tires ${this.brake} on the road!`)
    }
    // stop(){
    //     console.log(`The ${this.name} applied the brakes and it took ${this.stop} seconds to stop!`)
    // }
}

const ferrari = new Car('Ferrari', 'red', 300, 'screached', 3.4)

console.log(ferrari.name)
console.log(ferrari.color)
console.log(ferrari.speed)
console.log(ferrari.brake)
console.log(ferrari.currentSpeed)

ferrari.drive()
ferrari.brake()
