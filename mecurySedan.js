//this includes the vehicle class as a module
const VehicleModule = require("./vehicle")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

class Car extends VehicleModel{
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage);
        this.maxPassengers = 5;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maxSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
    }

}

// method loadPassenger, has 1 parameter, compare passenger is less than maxPassengers and if so then take
//in the parameter and add it to passenger and have it less than or = to max passenger and if
//it is still true than have passenger = parameter and return passenger

//method start has no parameters, if fuel is greater than 0 have the car start  and return true
//else the car has no fuel and the car wont start

//method service, if scheduleService if greater than 30000 is true then scheduleService is true and return scheduleService