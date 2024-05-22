function userObject(keys, value) {
    let userObjectCreation = {};
    userObjectCreation[keys] = value;
    return userObjectCreation;
}
;
console.log(userObject("name", "hammad"));
export {};
