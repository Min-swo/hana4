const assert = require("assert");

function getKeyIndexArray() {
  const arr = [100, 200, 300, 400, 500, 600, 700];

  for (const index in arr) {
    console.log(index);
  }

  for (const index in arr) {
    console.log(arr[index]);
  }

  for (const value of arr) {
    console.log(value);
  }
}

function getKeyIndexProperty() {
  const obj = {
    name: "Kim",
    addr: "Yongsan",
    level: 1,
    role: 9,
    receive: false,
  };

  for (const k in obj) {
    console.log("🚀 ~ for~in ~ key:", k);
  }
  console.log();
  for (const k in obj) {
    console.log("🚀 ~ for~in ~ val:", obj[k]);
  }
  console.log();
  const keys = Object.keys(obj);
  for (const k of keys) {
    console.log("🚀 ~ for~of ~ val:", obj[k]);
  }

  Object.defineProperty(obj, "level", { value: 1, enumerable: false });

  //   Object.defineProperty(obj, "role", { value: 9, writable: false });
  Object.freeze(obj, "role");

  console.log(Object.entries(obj));
  obj["role"] = 3;
  console.log(Object.entries(obj));
}

function makeObjectFromArray() {
  const arr = [
    ["A", 10, 20],
    ["B", 30, 40],
    ["C", 50, 60, 70],
  ];

  const obj = {};
  for (const [key, ...val] of arr) {
    obj[key] = val;
  }

  return obj;
}

const newObj = makeObjectFromArray();
console.log("🚀 ~ makeObjectFromArray ~ makeObjectFromArray:\n", newObj);

assert.deepStrictEqual(newObj, { A: [10, 20], B: [30, 40], C: [50, 60, 70] });

function makeArrayFromObject() {
  const obj = { A: [10, 20], B: [30, 40], C: [50, 60, 70] };

  const arr = [];
  const keys = Object.keys(obj);
  for (const k of keys) {
    arr.push([k, ...obj[k]]);
  }

  return arr;
}
const newArr = makeArrayFromObject();
console.log("🚀 ~ makeArrayFromObject ~ makeArrayFromObject:\n", newArr);

assert.deepStrictEqual(newArr, [
  ["A", 10, 20],
  ["B", 30, 40],
  ["C", 50, 60, 70],
]);

function shallowCopy() {
  function copyObject(obj) {
    const newObj = {};
    const keys = Object.keys(obj);
    for (const k of keys) {
      newObj[k] = obj[k];
    }

    return newObj;
  }

  const kim = { nid: 3, nm: "Kim", addr: "Pusan" };
  const newKim = copyObject(kim);
  newKim.addr = "Daegu";

  console.log(kim.addr !== newKim.addr);
  console.log("kim:", kim);
  console.log("newKim:", newKim);
}

console.log("\n🚀 ~ Shallow Copy:");
shallowCopy();

function deepCopy() {
  function isObject(obj) {
    return !obj || typeof obj == "object";
  }

  function copyObject(obj) {
    if (!isObject(obj)) return obj;

    const newObj = {};
    for (const k of Reflect.ownKeys(obj)) {
      newObj[k] = copyObject(obj[k]);
    }

    // const newObj = {};
    // for (const k in obj) {
    //   newObj[k] = copyObject(obj[k]);
    // }

    // const symbols = Object.getOwnPropertySymbols(obj);
    // for (s of symbols) {
    //   newObj[s] = obj[s];
    // }

    return newObj;
  }

  const kim = { nid: 3, nm: "Kim", addr: { city: "Pusan" } };
  const newKim = copyObject(kim);
  newKim.addr.city = "Daegu";

  console.log(kim.addr !== newKim.addr);
  console.log("kim:", kim);
  console.log("newKim:", newKim);
}
console.log("\n🚀 ~ deep Copy:");
deepCopy();

const obj = null;
console.log(typeof obj);
console.log(!obj);
