const assert = require("assert");

// 정렬을 해 7을 구하려고한다!
// 21
// 앞뒤 합 -> 왼오 비교해서 더작은 거 먼저 비교
// 1, 4, 8, 10, 13
// O(N) +

// const keyPair = (arr, sum) => {
//   const sortedArr = arr.toSorted((a, b) => a - b);
//   const len = sortedArr.length;

//   console.log("🚀 ~ keyPair ~ sortedArr:", sortedArr);

//   let tmp;
//   let left = 0;
//   let right = len - 1;

//   while (left < right) {
//     tmp = sortedArr[left] + sortedArr[right];
//     if (tmp == sum) break;
//     else if (tmp < sum) {
//       left += 1;
//     } else {
//       right -= 1;
//     }
//   }

//   if (tmp != sum) return;

//   const l = arr.findIndex((a) => a == sortedArr[left]);
//   const r = arr.findIndex((a) => a == sortedArr[right]);

//   return [l, r];
// };

const keyPair = (arr, sum) => {
  // {짝이 되는 값 : 짝의 index}
  const cache = {};
  for (let i = 0; i < arr.length; i += 1) {
    const val = arr[i];
    if (val in cache) return [cache[val], i];

    cache[Math.abs(sum - val)] = i;
  }
};

assert.deepStrictEqual(keyPair([1, 3, 4, 5], 7), [1, 2]);
assert.deepStrictEqual(keyPair([1, 4, 45, 6, 10, 8], 16), [3, 4]);
assert.deepStrictEqual(keyPair([1, 2, 4, 3, 6], 10), [2, 4]);
assert.deepStrictEqual(keyPair([1, 2, 3, 4, 5, 7], 9), [3, 4]);
