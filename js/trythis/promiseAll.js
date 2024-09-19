import assert from "assert";
import { error } from "console";

const vals = [1, 2, 3];
const randTime = (val) =>
  new Promise((resolve) => setTimeout(resolve, Math.random() * 1000, val));

// randTime(1).then(console.log);

const promiseAll = (pArr) => {
  return new Promise((resolve, reject) => {
    let cntToRun = pArr.length;
    const results = [];
    for (let i = 0; i < pArr.length; i += 1) {
      pArr[i]
        .then((succ) => {
          results[i] = succ;

          if ((cntToRun -= 1) === 0) resolve(results);
        })
        .catch(reject);
    }
  });
};

const promiseAllSettled = (pArr) => {
  return new Promise((resolve, reject) => {
    let cntToRun = pArr.length;
    const results = [];
    for (let i = 0; i < pArr.length; i += 1) {
      pArr[i]
        .then((succ) => {
          results[i] = {
            status: "fulfilled",
            value: succ,
          };

          if ((cntToRun -= 1) === 0) resolve(results);
        })
        .catch((error) => {
          results[i] = {
            status: "rejected",
            reason: error,
          };
          console.log(error);
          if ((cntToRun -= 1) === 0) resolve(results);
        });
    }
  });
};

console.time("first");

// promiseAll([randTime(1), randTime(2), randTime(3)])
//   .then((arr) => {
//     console.table(arr);
//     console.timeEnd("first");
//     assert.deepStrictEqual(arr, vals);
//   })
//   .catch(console.error);

// promiseAll([randTime(11), Promise.reject("RRR"), randTime(33)])
//   .then((array) => {
//     console.log("여긴 과연 호출될까?!");
//   })
//   .catch((error) => {
//     console.log("reject!!!!!!>>", error);
//   });

promiseAllSettled([randTime(11), Promise.reject("RRR"), randTime(33)])
  .then((array) => {
    console.log(array);
    // console.log("여긴 과연 호출될까?!");
  })
  .catch((error) => {
    console.log("reject!!!!!!>>", error);
  });
