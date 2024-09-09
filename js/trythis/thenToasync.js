import assert from "assert";

const randTime = (val) =>
  new Promise((resolve) => {
    const rtime = Math.random() * 1000;
    console.log("start>>", val, Math.trunc(rtime));
    setTimeout(() => {
      console.log("run>>", val);
      resolve(val);
    }, rtime);
  });

const promiseAll2 = async (promises) => {
  for (const promise of promises) {
    promise.catch((err) => err);
  }

  let cntToRun = promises.length;
  const results = [];

  let idx = 0;
  for await (const promise of promises) {
    results[idx++] = promise;
    if ((cntToRun -= 1) === 0) return results;
  }
};

console.time("PALL");
const arr = await promiseAll2([randTime(1), randTime(2), randTime(3)]);
console.table(arr);
console.timeEnd("PALL");

promiseAll2([randTime(11), Promise.reject("RRR"), randTime(33)])
  .then((array) => {
    console.table(array);
    console.log(JSON.stringify(array, null, "  "));
    console.log("여긴 과연 호출될까?!");
  })
  .catch((error) => {
    console.log("reject!!!!!!>>", error);
  });
