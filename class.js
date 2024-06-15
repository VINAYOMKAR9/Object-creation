class Animal {
 
    constructor(noOfLegs, vegetarian) {
        this.noOfLegs = noOfLegs;
        this.vegetarian = vegetarian;
      
    }
    eat() {
        console.log("Eating...", this.noOfLegs);
    }
  greet(){
    console.log(`Hi, I have ${this.noOfLegs} legs.`)
  }
 

}

let a = new Animal(4, true);
console.log(a);
a.eat();
a.greet();

  

  
