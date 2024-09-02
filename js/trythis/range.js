const assert = require("assert");

const makeArray = (len, fn) => {
  return Array.from({ length: len }, fn);
};

const range3 = (start, end, step = start > end ? -1 : 1) => {
  if (step === 0 || start === end) return [start];

  if (end === undefined) {
    if (start > 0) {
      end = start;
      start = 1;
    } else if (start < 0) {
      end = -1;
    } else {
      end = 0;
    }
  }
};

const range = (s, e, step = s > e ? -1 : 1) => {
  if (step === 0 || s === e) return [s];

  if ((s - e) * step > 0) return [];

  if (e === undefined) {
    if (s > 0) {
      e = s;
      s = 1;
    } else if (s < 0) {
      e = -1;
    } else {
      return [0];
    }
  }

  const result = [];
  for (let i = s; s < e ? i <= e : i >= e; i += step) {
    result.push(i);
  }
  return result;
};

const setLen = (start, end, inc) => {
  if (inc == 0) return 1;
  else {
    const tmp = (Math.abs(start - end) + 1) / Math.abs(inc);
    if (tmp >= 1) return tmp;
    return 1;
  }
};

const range2 = (...arg) => {
  const argNum = arg.length;
  if (argNum == 3) {
    const [start, end, inc] = arg;

    if ((start - end) * inc > 0) return [];

    // if (inc > 0) {
    //   if (start > end) return [];
    // } else if (inc < 0) {
    //   if (end > start) return [];
    // }

    const len = setLen(start, end, inc);
    return makeArray(len, (_, i) => start + i * inc);
  } else if (argNum == 2) {
    const [start, end] = arg;
    const inc = start < end ? 1 : -1;
    const len = inc != 0 ? (Math.abs(start - end) + 1) / Math.abs(inc) : 1;
    return makeArray(len, (_, i) => start + i * inc);
  } else if (argNum == 1) {
    const start = arg[0];
    const len = Math.abs(start);
    if (len != 0) {
      return makeArray(len, (_, i) => (start > 0 ? i + 1 : i + start));
    } else {
      return [0];
    }
  }
};

// TestCodes

assert.deepStrictEqual(range(1, 10, 1), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
assert.deepStrictEqual(range(1, 10, 2), [1, 3, 5, 7, 9]);
assert.deepStrictEqual(range(1, 10), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
assert.deepStrictEqual(range(10, 1), [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);

assert.deepStrictEqual(range(5, 5, 0), [5]);
assert.deepStrictEqual(range(1, 5, 0), [1]);
assert.deepStrictEqual(range(5, 5, -1), [5]);
assert.deepStrictEqual(range(5, 5), [5]);
assert.deepStrictEqual(range(0, 0, 5), [0]);
assert.deepStrictEqual(range(1, 5, -1), []);

assert.deepStrictEqual(range(1, 5, 6), [1]);
assert.deepStrictEqual(range(0, 5), [0, 1, 2, 3, 4, 5]);
assert.deepStrictEqual(range(-3, 0), [-3, -2, -1, 0]);

assert.deepStrictEqual(range(5, 1, 1), []);
assert.deepStrictEqual(range(0, -1), [0, -1]);
assert.deepStrictEqual(range(0, -3), [0, -1, -2, -3]);
assert.deepStrictEqual(range(5, 1), [5, 4, 3, 2, 1]);
assert.deepStrictEqual(range(10, 1, -2), [10, 8, 6, 4, 2]);

assert.deepStrictEqual(range(5), [1, 2, 3, 4, 5]);
assert.deepStrictEqual(range(0), [0]);
assert.deepStrictEqual(range(0, 0), [0]);
assert.deepStrictEqual(range(2, 1, -5), [2]);
assert.deepStrictEqual(range(0, -1, -5), [0]);
assert.deepStrictEqual(range(-5), [-5, -4, -3, -2, -1]);
assert.deepStrictEqual(
  range(50),
  Array.from({ length: 50 }, (_, i) => i + 1)
);
assert.deepStrictEqual(
  range(1, 150, 3),
  Array.from({ length: 50 }, (_, i) => i * 3 + 1)
);
