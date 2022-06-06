//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

const VehicleModule = require('./vehicle').Vehicle

class Car extends VehicleModule{
    constructor(make, model, mileage, year){
        this.maximumPassengers=5;
        this.passenger=0;
        this.numberOfWheels=4;
        this.maxSpeed=160;
        this.fuel=10;
        this.scheduleService=false;
    
    }
start(){
    if(this.fuel>0){
        console.log("engine started")
        return this.started == true;
    
    }else{
        console.log("out of fuel");
        return this.started=false;
    }
}
checkService() {
    if (this.mileage>30000) {            
        this.scheduleService=true
        return this.scheduleService;                       
    }
}

}
let myCar = new Car('mercury', 'sedan', 120000, '2004')

myCar.start()
myCar.loadPassenger(5)
myCar.stop()
myCar.checkService()

console.log(myCar)