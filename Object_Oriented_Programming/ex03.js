/*1.  Use a constructor function to implement an Electric Car (called 'EV') as a child 
"class" of 'Car'. Besides a make and current speed, the 'EV' also has the 
current battery charge in % ('charge' property)  */
class Car {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    accelerate() {
        this.speed += 10;
        console.log(`${this.make} is going at ${this.speed} km/h`);
    }

    brake() {
        this.speed -= 5;
        console.log(`${this.make} is going at ${this.speed} km/h`);
    }
}

class EV extends Car {
    constructor(make, speed, charge) {
        super(make, speed);
        this.charge = charge; 
    }
/*2.  Implement a 'chargeBattery' method which takes an argument 
'chargeTo' and sets the battery charge to 'chargeTo'  */
    chargeBattery(chargeTo) {
        this.charge = chargeTo;
        console.log(`${this.make} battery charged to ${this.charge}%`);
    }
/*3.  Implement an 'accelerate' method that will increase the car's speed by 20, 
and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 
km/h, with a charge of 22%'  */
    accelerate() {
        if (this.charge <= 0) {
            console.log(`${this.make} has no charge left!`);
            return;
        }
        this.speed += 20;
        this.charge -= 1;
        console.log(`${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}%`);
    }
}
/*4.  Create an electric car object and experiment with calling 'accelerate', 
'brake' and 'chargeBattery' (charge to 90%). Notice what happens when 
you 'accelerate'! Hint: Review the definiton of polymorphism 😉   */
const tesla = new EV('Tesla', 120, 23);
tesla.accelerate();  
tesla.accelerate();  
tesla.brake(); 
tesla.chargeBattery(90);
tesla.accelerate();
