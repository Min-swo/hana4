const assert = require("assert");

const push = (arr, ...args) => [...arr, ...args];

const pop = (arr, arg = 1) => {
  const ret = arr.slice(-arg);
  if (arg === 1) return ret[0];
  return ret;
};

const unshift = (arr, ...args) => [...args, ...arr];

const shift = (arr, arg = 1) => arr.slice(arg);

const arr = [1, 2, 3, 4];
assert.deepStrictEqual(push(arr, 5, 6), [1, 2, 3, 4, 5, 6]);
assert.deepStrictEqual(pop(arr), 4);
assert.deepStrictEqual(pop(arr, 2), [3, 4]);
assert.deepStrictEqual(unshift(arr, 0), [0, 1, 2, 3, 4]);
assert.deepStrictEqual(unshift(arr, 7, 8), [7, 8, 1, 2, 3, 4]);
assert.deepStrictEqual(shift(arr), [2, 3, 4]);
assert.deepStrictEqual(shift(arr, 2), [3, 4]);
assert.deepStrictEqual(arr, [1, 2, 3, 4]);
