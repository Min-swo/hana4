// function getDiffMillis(dt1, dt2) {
//   const d1 = new Date(dt1);
//   const d2 = new Date(dt2);

//   //   const { getTime: getTime1 } = new Date(dt1);
//   //   const { getTime: getTime2 } = new Date(dt2);

//   //   return getTime1.bind(d1)() - getTime2.apply(d2);
//   return Math.abs(d1.getTime() - d2.getTime());
// }

// console.log(getDiffMillis("2021-01-01", "2021-01-02"));

class Dog {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  fn() {
    return "FN";
  }

  static sfn() {
    // Instance X, F.O에 있음!
    return "SFN";
  }
}
const lucy = new Dog("Lucy");
const { sfn } = Dog;
// Dog는 생성자 함수 => F.O
// F.O에 있는 sfn destructuring 가능!

const { name: aa, fn: fnnn, getName } = lucy;
// Instance 함수라서 가능!
// getName은 this를 사용해서 lucy.getName()으로
// 사용해야 this binding
// Class의 Instance method는 this를 undefined로 봄

console.log(aa, sfn(), fnnn(), getName); // ?
console.log(getName.call(lucy)); // ?
