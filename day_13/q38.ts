function describedCity(city:string, country: string = "Pakistan"){
    console.log(
        `${city} is in ${country}`
    );
}

describedCity("Karachi");
describedCity("Islamabad");
describedCity("New York", "United States of America");