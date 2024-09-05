globalThis.n = "global";
this.n = "module";

const Cat = (n) => {
  this.bark1 = function () {
    console.log("🚀 ~ cat ~ this.n:", this.n);
  };
  this.barks = () => console.log("🚀 ~ cat ~ this.n:", this.n); // => module.this

  return this;
};

const c = Cat("X");
const f1 = c.bark1;
const f2 = c.barks;

c.bark1();
c.barks();
f1();
f2();
