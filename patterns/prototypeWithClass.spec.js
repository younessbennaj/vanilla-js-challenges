const { Animal, Dog, Cat } = require('./prototypeWithFunction');

describe('Animal', () => {
  it('should create an instance of Animal with the correct properties', () => {
    const animal = new Animal('Test Animal', 'Test Sound');
    expect(animal.name).toBe('Test Animal');
    expect(animal.sound).toBe('Test Sound');
  });

  it('should have a method makeSound() that logs the sound to the console', () => {
    const animal = new Animal('Test Animal', 'Test Sound');
    const consoleSpy = jest.spyOn(console, 'log');
    animal.makeSound();
    expect(consoleSpy).toHaveBeenCalledWith('Test Sound');
    consoleSpy.mockRestore();
  });

  it('should have a method readName() that logs the name to the console', () => {
    const animal = new Animal('Test Animal', 'Test Sound');
    const consoleSpy = jest.spyOn(console, 'log');
    animal.readName();
    expect(consoleSpy).toHaveBeenCalledWith('Test Animal');
    consoleSpy.mockRestore();
  });
});

describe('Dog', () => {
  it('should create an instance of Dog with the correct properties', () => {
    const dog = new Dog('Buddy', 'Woof', 'Labrador');
    expect(dog.name).toBe('Buddy');
    expect(dog.sound).toBe('Woof');
    expect(dog.breed).toBe('Labrador');
  });

  it('should have a method makeSound() that logs the bark sound to the console', () => {
    const dog = new Dog('Buddy', 'Woof', 'Labrador');
    const consoleSpy = jest.spyOn(console, 'log');
    dog.makeSound();
    expect(consoleSpy).toHaveBeenCalledWith('Woof');
    consoleSpy.mockRestore();
  });

  it('should have a method readName() that logs the name to the console', () => {
    const dog = new Dog('Buddy', 'Woof', 'Labrador');
    const consoleSpy = jest.spyOn(console, 'log');
    dog.readName();
    expect(consoleSpy).toHaveBeenCalledWith('Buddy');
    consoleSpy.mockRestore();
  });
});

describe('Cat', () => {
  it('should create an instance of Cat with the correct properties', () => {
    const cat = new Cat('Whiskers', 'Meow', 'Orange');
    expect(cat.name).toBe('Whiskers');
    expect(cat.sound).toBe('Meow');
    expect(cat.color).toBe('Orange');
  });

  it('should have a method makeSound() that logs the meow sound to the console', () => {
    const cat = new Cat('Whiskers', 'Meow', 'Orange');
    const consoleSpy = jest.spyOn(console, 'log');
    cat.makeSound();
    expect(consoleSpy).toHaveBeenCalledWith('Meow');
    consoleSpy.mockRestore();
  });

  it('should have a method readName() that logs the name to the console', () => {
    const cat = new Cat('Whiskers', 'Meow', 'Orange');
    const consoleSpy = jest.spyOn(console, 'log');
    cat.readName();
    expect(consoleSpy).toHaveBeenCalledWith('Whiskers');
    consoleSpy.mockRestore();
  });

  describe('method should exist 1 time in memory', () => {
    it('makeSound should not be shared between all Animal instances ', () => {
      const cat = new Cat('Whiskers', 'Meow', 'Orange');
      const dog = new Dog('Buddy', 'Woof', 'Labrador');
      expect(cat.makeSound === dog.makeSound).toBe(false);
    });
    it('readName should be shared between all Animal instances ', () => {
      const cat = new Cat('Whiskers', 'Meow', 'Orange');
      const dog = new Dog('Buddy', 'Woof', 'Labrador');
      expect(cat.readName === dog.readName).toBe(true);
    });
  })
});