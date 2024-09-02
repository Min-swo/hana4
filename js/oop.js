// const obj = { id: 1, name: "Hong" };
// console.log("obj.toString>>", obj.toString);
// class Animal {
//   // instance(this) + prototpye 생성! (무엇보다 먼저 실행!)
//   constructor(name) {
//     // {name: …}
//     this.name = name || super.constructor.name;
//   }
// }
// const dog = new Animal("Dog");
// console.log("obj.keys=", Object.keys(obj));
// console.log("ak=", Object.keys(dog));
// for (let k in dog) console.log("k=", k);
// console.log("oh=", obj.hasOwnProperty("id"));
// console.log("dh=", dog.hasOwnProperty("id"));
// console.log("dh=", dog.hasOwnProperty("name"));

class Animal {
  static ID = 1;
  static getId() {
    return this.ID;
  } // ?
  getId() {
    return this.ID;
  } // Error
  getId() {
    return Animal.ID;
  } // OK
}
class Dog extends Animal {
  static id = 3;
}
const jake = new Dog("Jake");

console.log(Dog.ID, Animal.ID); // 1, 1
Animal.ID = 2; // Animal.prototype static 영역의 ID 값 변경
console.log(Dog.ID, Animal.ID); // 2, 2
Dog.ID = 3; // Dog class prototype static 영역에 새로운 ID 생성
console.log(Dog.ID, Animal.ID); // 3, 2
class Maltese extends Dog {} // Maltese → Dog.prototype
console.log(Maltese.ID, Dog.ID, Animal.ID); // 3, 3, 2
