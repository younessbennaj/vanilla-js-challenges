function Animal(name, sound) {
  this.name = name;
  this.sound = sound;
  this.makeSound = function() {
    console.log(this.sound);
  }
}

Animal.prototype.readName = function() {
  console.log(this.name);
}

function Dog(name, sound, breed) {
  // Dog instance initialize with name and sounds props from Animal constructor 
  Animal.call(this, name, sound);
  this.breed = breed;
}

Object.setPrototypeOf(Dog.prototype, Animal.prototype);

function Cat(name, sound, color) {
  Animal.call(this, name, sound);
  this.color = color;
}

Cat.prototype = Object.create(Animal.prototype);

module.exports = {
  Animal,
  Cat,
  Dog,
}