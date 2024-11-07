{
  class Car {
    constructor(
      public make: string,
      public model: string,
      public year: number
    ) {}
    getCarAge() {
      console.log(
        new Date().getFullYear() - this.year,
        `(assuming current year is ${this.year})`
      );
    }
  }

  const car = new Car("Honda", "Civic", 2022);
  car.getCarAge();
}
