var Categories;
(function (Categories) {
    Categories[Categories["car"] = 0] = "car";
    Categories[Categories["truck"] = 1] = "truck";
    Categories[Categories["motercyle"] = 2] = "motercyle";
})(Categories || (Categories = {}));
;
console.log(Categories.motercyle); //
export {};
