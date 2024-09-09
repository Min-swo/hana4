import assert from "assert";
import { error } from "console";

const afterTime = (sec) =>
  new Promise((resolve, reject) => setTimeout(resolve, sec * 500, sec));

// const r1 = await afterTime(1);
// console.log("🚀  r1:", r1);
// // afterTime(1).then(r1 => console.log('🚀  r1:', r1));

// function f1() {
//   afterTime(0.5).then(console.log);
// }

// async function f2() {
//   const r2 = await afterTime(1);
//   console.log("🚀  r2:", r2);
//   return r2;
// }

// const rf1 = f1();
// const rf2 = await f2();
// console.log("🚀  rf1/2:", rf1, rf2);

// function layout() {
//   (async () => {
//     const r3 = await afterTime(1);
//     console.log("🚀  r3:", r3);
//   })(); // IIFE
// }
// layout();

// console.log("----------------");
// const mapResult = [1, 2, 3].map(async (val) => {
//   const r = await afterTime(val);
//   console.log(r);
//   return r;
// });
// console.log("mapResult=", mapResult);

// const odds1 = [1, 2, 3].filter(async (val) => {
//   const r = await afterTime(val);
//   console.log(r);
//   return r % 2 === 1;
// });
// console.log("odds1=", odds1);

// const odds = [1, 2, 3].filter(async (val) => {
//   const r = await afterTime(val);
//   console.log(r);
//   return r % 2 === 1;
// });
// console.log("odds=", odds);

// const rrr = (await Promise.all([1, 2, 3].map(afterTime))).filter((a) => a % 2);
// console.log("🚀 ~ rrr:", rrr);

// const f = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users/1");

//   if (!res.ok) throw new Error("Failt to Fetch!!");
//   await new Promise((resolve) => setTimeout(resolve, 2000));
//   const data = await res.json();

//   return data.name;
// };

// console.log(await f());

// const arr = [afterTime(1), afterTime(2)];

// console.time("for-await-of");

// for (const fo of arr.values()) {
//   console.log("fo=", await fo);
// }

// for await (const fao of arr.values()) {
//   console.log("fao=", fao);
// }

// console.timeEnd("for-await-of");

const vals = [1, 2, 3];
const randTime = (val) =>
  new Promise((resolve) => setTimeout(resolve, Math.random() * 1000, val));

// const promiseAll = (pArr) => {
//   return new Promise((resolve, reject) => {
//     let cntToRun = pArr.length;
//     const results = [];
//     for (let i = 0; i < pArr.length; i += 1) {
//       pArr[i]
//         .then((succ) => {
//           results[i] = succ;

//           if ((cntToRun -= 1) === 0) resolve(results);
//         })
//         .catch(reject);
//     }
//   });
// };

const promiseAll2 = async (promises) => {
  let cntToRun = promises.length;
  const results = [];

  for (let i = 0; i < promises.length; i++) {
    promises[i].catch((err) => err);
    try {
      results[i] = await promises[i];
      console.log(results[i]);
      if ((cntToRun -= 1) === 0) return results;
    } catch (error) {
      console.log("Caught error in try...catch:", error);
    }
  }
};

// promiseAll2([randTime(1), randTime(2), randTime(3)])
//   .then((arr) => {
//     console.table(arr);
//     assert.deepStrictEqual(arr, vals);
//   })
//   .catch(console.error);

promiseAll2([randTime(11), Promise.reject("RRR"), randTime(33)])
  .then((array) => {
    console.log("여긴 과연 호출될까?!");
  })
  .catch((error) => {
    console.log("reject!!!!!!>>", error);
  });
