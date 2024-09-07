/*1.  Re-create Challenge #1, but this time using an ES6 class (call it 'CarCl')  */
class CarCl {
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
    /*2.  Add a getter called 'speedUS' which returns the current speed in mi/h (divide 
by 1.6)  */
    get speedUS() {
        return this.speed / 1.6;
    }
    /*3.  Add a setter called 'speedUS' which sets the current speed in mi/h (but 
converts it to km/h before storing the value, by multiplying the input by 1.6)  */
    set speedUS(speedInMiles) {
        this.speed = speedInMiles * 1.6;
    }
}
/*4.  Create a new car and experiment with the 'accelerate' and 'brake' 
methods, and with the getter and setter.  */
const car = new CarCl('Ford', 120);
car.accelerate();  
car.brake();       
console.log(`Speed in mi/h: ${car.speedUS}`); 
car.speedUS = 80;
console.log(`New speed in km/h: ${car.speed}`);
