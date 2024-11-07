"use strict";
{
    class Car {
        constructor(make, model, year) {
            this.make = make;
            this.model = model;
            this.year = year;
        }
        getCarAge() {
            console.log(new Date().getFullYear() - this.year, `(assuming current year is ${this.year})`);
        }
    }
    const car = new Car("Honda", "Civic", 2022);
    car.getCarAge();
}
