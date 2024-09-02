globalThis.name = "GlobalName";
this.name = "ModuleName";

const obj = {
  name: "ObjName",
  bark1: function () {
    console.log("1=", this.name);
    const self = this; // OLD version
    setTimeout(
      function tf() {
        console.log("11=", self.name);
        console.log("12=", this); // Timeout
      }.bind(this),
      1000
    ); // .bind(this)
    console.log("xxxx");
  },
  bark2() {
    // same as bark2: function() {
    console.log("2=", this.name);
    setTimeout(() => {
      // Arrow func은 this X
      console.log("22=", this.name);
    }, 1000);
  },
  bark3() {
    // ⇐⇒ bark3: function() {
    function innerFn() {
      console.log("33=", this); // GlobalThis
    }
    innerFn();
  },
  bark4: () => {
    console.log(this.name); // ?
  }, // bark4의 소유자(obj)의 Lexical Scope의 this
};

// obj.bark1(); // bark1.bind(obj)();
// obj.bark2();
// obj.bark3();
obj.bark4();

// 함수 선언문에서 this를 bind해주지 않으면 Global
// Object 내부에서 this는 Module!
//
