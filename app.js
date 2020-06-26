let cars = {
    type: "sport",
    maxSpeed: 240,
    colors: ["green", "red", "blue", "purple"],
};

cars.hasManyColors = cars.colors.length > 3;

console.log(cars.hasManyColors);