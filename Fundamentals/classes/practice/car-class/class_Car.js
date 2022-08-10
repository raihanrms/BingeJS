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

    zeroTosixty(){
        setTimeout(() => {
            console.log('This car can go from 0 to 60 in 2.9 seconds');
            //this.currentSpeed = 60;
            console.log(this.currentSpeed)
        });
    }

    // methods are functions that are attached to the object
    // drive method
    drive(){
        // console.log(`The ${this.name}'s top speed is at ${this.topSpeed} mph`)
        this.currentSpeed += 10
        console.log(`The ${this.name} is accelarating by 10 at ${this.currentSpeed} mph`)
    }
    // brake method
    brake(){
        this.currentSpeed -= 10
        console.log('Brakes applied: Speed goes down by 10!')
    }
    // stop(){
    //     console.log(`The ${this.name} applied the brakes and it took ${this.stop} seconds to stop!`)
    // }
}

const ferrari = new Car('Ferrari', 'red', 300)

// console.log(ferrari.name)
// console.log(ferrari.color)
// console.log(ferrari.TopSpeed)

// testing code
ferrari.zeroTosixty()

ferrari.drive()
ferrari.drive()
ferrari.drive()
ferrari.drive()
ferrari.drive()
ferrari.drive()
console.log(ferrari.currentSpeed)

ferrari.brake()
console.log(ferrari.currentSpeed)

ferrari.brake()
console.log(ferrari.currentSpeed)

