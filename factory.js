function animal(noOfLegs, vegetarian) {

    let obj = {};
    obj.noOfLegs = noOfLegs;
    obj.vegetarian = vegetarian;

    obj.eat = function () {
        return `eating...`
    }
    obj.greet = function () {
        return `Hi, I have ${noOfLegs} legs.`
    }

    return obj;
}

let data = animal(4, true)
console.log(data);

console.log(data.noOfLegs);
console.log(data.vegetarian);

console.log(data.eat());
console.log(data.greet());