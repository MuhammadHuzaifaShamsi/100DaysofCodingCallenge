function car_information(manufacturer, model, ...options) {
    let car = {
        manufacturer: manufacturer,
        model: model
    };

    
    for (let i = 0; i < options.length; i += 2) {
        let key = options[i];
        let value = options[i + 1];
        car[key] = value;
    }

    return car;
}


let myCar = car_information("Nissan", "GTR", "color", "Grey", "year", 2022);


console.log(myCar);