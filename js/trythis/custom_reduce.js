import assert from "assert";

// const reduce = (arr, fn, initValue = arr[0]) => {
//   let acc = initValue;
//   return (() => {
//     if (acc === arr[0]) arr = arr.slice(1);
//     arr.forEach((a) => (acc = fn(acc, a)));
//     return acc;
//   })();
// };

// const reduce = (arr, fn, initValue = arr[0]) => {
//   let acc = initValue;
//   if (acc === arr[0]) arr = arr.slice(1);
//   arr.forEach((a) => (acc = fn(acc, a)));
//   return acc;
// };

const reduce2 = (arr, fn, initValue) => {
  if (!arr || !Array.isArray(arr)) return [];

  let i = 0;
  let acc = initValue ?? ((i = 1), arr[0]);

  for (; i < arr.length; i++) {
    acc = fn(acc, arr[i]);
  }

  return acc;
};

const reduce = (arr, fn, initValue) => {
  if (!arr || !Array.isArray(arr)) return [];

  let acc = initValue ?? arr[0];
  const startIndex = initValue !== undefined ? 0 : 1;

  arr.slice(startIndex).forEach((a) => (acc = fn(acc, a)));
  return acc;
};

const reduceGpt = (arr, fn, initValue) => {
  const [acc, idx] = initValue !== undefined ? [initValue, 0] : [arr[0], 1];

  arr.slice(idx).forEach((item) => (acc = fn(acc, item)));
  return acc;
};

// const reduce = (arr, fn, initValue = arr[0]) => {
//   let acc = initValue;
//   let s = 0;
//   if (acc === arr[0]) {
//     s = 1;
//   }

//   return (() => {
//     for (let i = s; i < arr.length; i++) {
//       acc = fn(acc, arr[i]);
//     }
//     return acc;
//   })();
// };

const a10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

assert.deepStrictEqual(
  reduce(a10, (acc, cur) => acc + cur, 0),
  a10.reduce((acc, cur) => acc + cur, 0)
);

const hong = { id: 1, name: "Hong" };
const choi = { id: 5, name: "Choi" };
const kim = { id: 2, name: "kim" };
const lee = { id: 3, name: "Lee" };
const park = { id: 4, name: "Park" };
const users = [kim, lee, park]; // 오염되면 안됨!!

assert.deepStrictEqual(
  reduce(users, (acc, user) => acc + user.name),
  users.reduce((acc, user) => acc + user.name)
);
