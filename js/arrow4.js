globalThis.name = "GlobalName";

const Cat = (name) => {
  console.log("Cat >>", this, new.target);
  this.name = name;
  this.bark = function () {
    console.log('bark=', new.target, this.name, name);
  }; //??? 아 this.bark라서 모듈내 프로퍼티 정의로 보는거?
  this.bark2 = () =>
    console.log('bark2=', new.target, this.name, name);

  return this;
}
// 결국 this도 object!
// 
const cat = Cat('Coco');
// console.log(this.name);
// this.bark();
// console.log(typeof this);
// const cat = new Cat(''); // error!!
cat.bark(); // ?
// cat.bark2(); // ?
// // Cat.bark(); // ?
// console.log('type=', typeof cat); // ? 
