
console.log('------------------------------Using call -------------------------------');
function Animal(noOfLegs,vegetarian){
    this.noOfLegs=noOfLegs,
    this.vegetarian=vegetarian,
    this.eat = function () {
        return `eating...`
    }
    this.greet = function () {
        return `Hi, I have ${noOfLegs} legs.`
    }
}
let data = new Animal(4,true)
console.log(data);


function objUser(){

    console.log(this.noOfLegs );
    console.log(this.vegetarian);
   
    console.log(this.eat());
    console.log(this.greet());
    
    
}
objUser.call(data)

