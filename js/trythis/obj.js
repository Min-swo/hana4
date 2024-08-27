// ===================================
// function f1(user) {
//   let { id, name } = user;
//   console.log(id, name);
// }

// function f2({ id, name }) {
//   console.log(id, name);
// }

// const f3 = ({ id, name }) => console.log(id, name);

// const hong = { id: 1, name: "Hong" };
// const lee = { id: 2, name: "Lee" };

// f1(hong);
// f2(lee);
// f3(lee);

// ===================================

// const user = { id: 1, name: "Hong", passwd: "xxx", addr: "Seoul" };

// const { passwd, ...userInfo } = user;
// console.log(userInfo);

// const userInfo = { ...user };
// delete userInfo.passwd;
// console.log(userInfo);

// ===================================

// const arr = [[{ id: 1 }], [{ id: 2 }, { id: 3 }]];
// let [[{ id: id1 }], [{ id: id2 }, { id: id3 }]] = arr;
// console.log(id1, id2, id3);

// ===================================

// const user = { name: "Hong", passwd: "xyz", addr: "Seoul" };

// function getValueExceptInitial(k) {
//   const { [k]: val } = user;
//   const [, ...ret] = [...val];
//   return ret.join("");
// }
// console.log(getValueExceptInitial("name")); // 'ong'
// console.log(getValueExceptInitial("passwd")); // 'yz'
// console.log(getValueExceptInitial("addr")); // 'eoul'

// ===================================

// class Dog {
//   constructor(name) {
//     this.name = name;
//   }

const obj = { s: 123 };
console.log(obj.s);

//   getName() {
//     return this.name;
//   }

//   fn() {
//     return "FN";
//   }

//   static sfn() {
//     return "SFN";
//   }
// }

// const lucy = new Dog("Lucy");
// console.log(lucy);
// const { sfn } = Dog;
// console.log(sfn());
// const { name: aa, fn: fnnn, getName } = lucy;

// console.log(aa, sfn(), fnnn(), getName); // ?
// getName(); // ?s

// ===================================
