function animal(noOfLegs,vegetarian){
    console.log(`The animal name is: ${this.name}, Its have ${noOfLegs} Legs ,Is vegetarian :${vegetarian}`);
    
}
let objUser={
    name:'cow'

}


animal.apply(objUser,[4,true])