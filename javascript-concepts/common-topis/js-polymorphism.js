class Animal{
    food(){
        console.log('Omnivorous');
    }
}

class Dog extends Animal{

}

class Lion extends Animal{
  food(){
      console.log('Carnivourous');
  }
}

var animal1 = new Dog();
var animal2 = new Lion();

//console.log(animal1.food());
console.log(animal2.food());