class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }

  makeSound() {
    console.log(this.sound);
  }
}

Animal.prototype.readName = function() {
  console.log(this.name);
}

class Dog extends Animal {
  constructor(name, sound, breed) {
    super(name, sound);
    this.breed = breed;
  }
}

class Cat extends Animal {
  constructor(name, sound, color) {
    super(name, sound);
    this.color = color;
  }
}

module.exports = {
  Animal,
  Cat,
  Dog,
}