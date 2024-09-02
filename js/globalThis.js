globalThis.name = "GlobalName";
this.name = "ModuleName";

const f = () => {
  const a = function () {
    console.log("bark=", this.name);
  };

  a();
};

f();

k = 3;
console.log(k);
console.log(globalThis.k);
