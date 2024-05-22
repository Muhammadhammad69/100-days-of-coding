function makeCar(
    manufacture: string,
    model: string,
    ...option: (string | number |any)[][]
){
    let carInfo:any = {
        manufacture,
        model
    }
    // option.forEach(([item, value]) => carInfo[item] = value);
    for (let i = 0; i < option.length; i ++){
        console.log(option[i][0]);
        carInfo[option[i][0]] = option[i][1];

    }

 console.log(carInfo);
}

makeCar("Toyota", "Corolla", ["Color", "Blue"], ["Airbags", "three"], ["ChildLock", true]);

// function make_car(
//     manufacturer: string,
//     model: string,
//     ...options: [string, any][]
//   ) {
//     let car:any = { manufacturer, model };
//     options.forEach(([key, value]) => (car[key] = value));
//     return car;
//   }
  
//   console.log(make_car("Toyota", "Carolla", ["color", "red"], ["year", 2020]));
//   console.log(make_car("Ford", "Fiesta", ["color", "blue"], ["sunroof", true]));