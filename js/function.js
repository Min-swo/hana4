function f() {
  console.log("f>>", this.name);
}

f();
f.bind({ name: "Binding" })();
f.call({ name: "Binding" });

const f2 = f;

const boundF = f.bind({ name: "boundF" });
boundF();
console.log(boundF == f);

globalThis.id = 100;
this.id = 900;
const obj = {
  id: 1,
  f1() {
    console.log("f1>>>", this.id);
  },
  f2: () => console.log("f1>>>", this.id),
};

obj.f1(); // f1.bind(obj)();
obj.f2(); // f2();

const of1 = obj.f1;
const of2 = obj.f2;

console.log(of1 == obj.f1);
console.log(of2 == obj.f2);

of1(); // just function-object
// *** Method로 불러야 bind됨!
// function-object로 부르면 bind X
// 함수 bind X => this : global

of2(); // 화살표 함수의 this는 나를 가지고 있는 객체의 Scope의 this를 가진다! ==> 지금은 module

globalThis.name = "Global Name";

const obj2 = {
  name: "Obj2 Name",
  printName() {
    console.log(this.name);
  },
};

const printName = obj2.printName;
obj2.printName();
printName();
