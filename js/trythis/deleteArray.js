const assert = require("assert");

// const deleteArray = (arr, ...args) => {
//   if (!args.some((a) => !Number.isInteger(a))) {
//     if (args.length == 1) return arr.slice(0, args[0]);
//     else return [...arr.slice(0, args[0]), ...arr.slice(args[1])];
//   } else {
//     return arr.filter((a) => a[args[0]] != args[1]);
//   }
// };

const deleteArray = (arr, start, end = Infinity) => {
  if (typeof start == "number")
    return arr.filter((a, i) => i < start || i >= end);
  else return arr.filter((a) => a[start] != end);
};

const arr = [1, 2, 3, 4];
assert.deepStrictEqual(deleteArray(arr, 2), [1, 2]);
assert.deepStrictEqual(deleteArray(arr, 1, 3), [1, 4]);
assert.deepStrictEqual(arr, [1, 2, 3, 4]);

const Hong = { id: 1, name: "Hong" };
const Kim = { id: 2, name: "Kim" };
const Lee = { id: 3, name: "Lee" };
const users = [Hong, Kim, Lee];

assert.deepStrictEqual(deleteArray(users, 2), [Hong, Kim]);
assert.deepStrictEqual(deleteArray(users, 1, 2), [Hong, Lee]);
assert.deepStrictEqual(deleteArray(users, "id", 2), [Hong, Lee]);
assert.deepStrictEqual(deleteArray(users, "name", "Lee"), [Hong, Kim]);
