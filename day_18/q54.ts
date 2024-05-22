function userObject(keys:(number | string), value:any ){
    let userObjectCreation:any = {}
    userObjectCreation[keys] = value;

    return userObjectCreation;
};

console.log(userObject("name", "hammad"));