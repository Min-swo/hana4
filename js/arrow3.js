const Dog = function (name) {
  console.log(this, new.target, this instanceof Dog);
  this.name = name;
  this.bark = function () {
    console.log("bark=", new.target, this.name, name);
  };
  this.bark2 = () => console.log("bark2=", new.target, this.name, name);
};

const dog = Dog("Doggy");
const lucy = new Dog("Lucy");
// dog;
// Dog.bark(); // ?
// lucy.bark(); // ?
// lucy.bark2(); // ?
console.log("type=", typeof dog); // ?
console.log("type=", typeof lucy); // ?
