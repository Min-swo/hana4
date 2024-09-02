const square = (n) => n ** 2;
const sqrt = (n) => Math.sqrt(n);
const cube = (n) => n ** 3;

const fncWithReduce = (arr, fn) => {
  const result = [];
  arr.reduce((_, a) => {
    result.push(applyFnc(a, fn));
  }, "");
  return result;
};

// const fncWithReduce = (arr, fn) => {
//   const result = [];
//   return (() => {
//     arr.reduce((_, a) => {
//       result.push(fn.reduce((ret, f) => f(ret), a));
//     }, "");
//     return result;
//   })();
// };

const applyFnc = (a, fn) => {
  return fn.reduce((ret, f) => f(ret), a);
};

const arr = [1, 2, 3, 4, 5];
const fn = [square, sqrt, cube];

const r = arr.map((a) => fn.reduce((acc, f) => f(acc), a));

console.log(r);

const res = fncWithReduce(arr, fn);
console.log("🚀 ~ res:", res);
console.log("🚀 ~ arr:", arr);
