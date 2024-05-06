function make_car(manufacturer:string, model:string, ...options:string[]) : object {
    let car = {manufacturer, model, options };
    return car;
}
console.log(make_car("Toyota", "Corolla", "colour: red", "year: 2020"));
console.log(make_car("Ford", "Fiesta", "colour: blue", "sunroof: true"));

