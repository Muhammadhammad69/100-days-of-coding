"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function describedCity(city, country = "Pakistan") {
    console.log(`${city} is in ${country}`);
}
describedCity("Karachi");
describedCity("Islamabad");
describedCity("New York", "United States of America");
