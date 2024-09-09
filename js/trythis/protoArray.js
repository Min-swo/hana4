import assert from "assert";

Object.defineProperties(Array.prototype, {
  firstObject: {
    get() {
      return this[0];
    },
    set(value) {
      this[0] = value;
    },
  },
  lastObject: {
    get() {
      return this.at(-1);
    },
    set(value) {
      // this.with(-1, value); ==> pure func
      this[-1] = value;
    },
  },
});

Array.prototype.mapBy = function (prop) {
  return this.map((a) => a[prop]);
};

Array.prototype.filterBy = function (prop, value, isIncludes = false) {
  const cb = isIncludes
    ? (a) => a[prop]?.isIncludes(value)
    : (a) => a[prop] === value;
  return this.filter(cb);
};

Array.prototype.rejectBy = function (prop, value, isIncludes = false) {
  const cb = isIncludes
    ? (a) => !a[prop]?.isIncludes(value)
    : (a) => a[prop] !== value;
  return this.filter(cb);
};

Array.prototype.findBy = function (prop, value) {
  return this.find((a) => a[prop] === value);
};

Array.prototype.sortBy = function (prop) {
  console.log("🚀 ~ prop:", prop);
  const [key, direction = "asc"] = prop.split(":");
  const dir = direction.toLowerCase() === "desc" ? -1 : 1;
  console.log("🚀 ~ key:", key);
  console.log("🚀 ~ dir:", dir);

  return this.toSorted((a, b) => (a[key] < b[key] ? -1 : 1));
};

// const arr = [1, 2, 3, 4, 5];
// assert.deepStrictEqual([arr.firstObject, arr.lastObject], [1, 5]);
// arr.firstObject = 10;
// arr.lastObject = 50;
// assert.deepStrictEqual([arr.firstObject, arr.lastObject], [10, 50]);

// const arr2 = [];
// assert.deepStrictEqual([arr2.firstObject, arr2.lastObject], [,]);
// arr2.firstObject = 10;
// arr2.lastObject = 50;
// assert.deepStrictEqual([arr2.firstObject, arr2.lastObject], [10, 50]);

const hong = { id: 1, name: "Hong" };
const kim = { id: 2, name: "Kim" };
const lee = { id: 3, name: "Lee" };
const users = [hong, lee, kim]; // 오염되면 안됨!!

assert.deepStrictEqual(users.mapBy("id"), [1, 3, 2]);
assert.deepStrictEqual(users.mapBy("name"), ["Hong", "Lee", "Kim"]);

assert.deepStrictEqual(users.filterBy("id", 2), [kim]);
assert.deepStrictEqual(users.rejectBy("id", 2), [hong, lee]);

assert.deepStrictEqual(users.findBy("name", "Kim"), kim);

assert.deepStrictEqual(users.sortBy("name"), [hong, kim, lee]);
// assert.deepStrictEqual(users.sortBy("name:desc"), [lee, kim, hong]);

// assert.deepStrictEqual(users.firstObject, hong);
// assert.deepStrictEqual(users.lastObject, kim);

// users.lastObject = lee;
// assert.deepStrictEqual(users.firstObject, lee);
// users.lastObject = hong;
// assert.deepStrictEqual(users.lastObject, hong);
