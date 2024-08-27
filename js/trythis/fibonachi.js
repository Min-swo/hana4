// function loopFibonacci(x) {
//   let table = [];
//   table[0] = 0;
//   table[1] = 1;
//   for (let i = 2; i <= x; i++) {
//     table[i] = table[i - 1] + table[i - 2];
//   }
//   return table[x];
// }
// console.log(loopFibonacci(7));

// function loopFibonacci(x) {
//   const arr = [0, 1];
//   for (let i = 2; i <= x; i++) {
//     [arr[0], arr[1]] = [arr[1], arr[0] + arr[1]];
//   }
//   return arr[1];
// }
// console.log(loopFibonacci(7));

// function memoized(fn) {
//   const memoizedTable = {};
//   return function (k) {
//     return memoizedTable[k] || (memoizedTable[k] = fn(k));
//   };
// }

// const memoizedFibonacci = memoized(function (n) {
//   if (n == 0) return 0;
//   else if (n == 1) return 1;

//   return memoizedFibonacci(n - 1) + memoizedFibonacci(n - 2);
// });

// console.log(memoizedFibonacci(7));

// function memoized(fn) {
//   const memoizedTable = {};
//   return function (n) {
//     return memoizedTable[n] || (memoizedTable[n] = fn(n));
//   };
// }

// const memoizedFibonacci = memoized(function (n) {
//   if (n == 0 || n == 1) return n;

//   return memoizedFibonacci(n - 1) + memoizedFibonacci(n - 2);
// });

// console.log(memoizedFibonacci(7));

function memoized(fn) {
  const memoizedTable = {};

  return function (n) {
    return memoizedTable[n] || (memoizedTable[n] = fn(n));
  };
}

const memoizedFibonacci = memoized(function (n) {
  if (n == 0 || n == 1) return n;

  return memoizedFibonacci(n - 1) + memoizedFibonacci(n - 2);
});

console.log(memoizedFibonacci(50000));
