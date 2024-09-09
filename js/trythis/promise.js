// setTimeout(function () {
//   console.log("depth1", new Date());
//   setTimeout(function () {
//     console.log("depth2", new Date());
//     setTimeout(function () {
//       console.log("depth3", new Date());
//       throw new Error("Already 3-depth!!");
//     }, 3000);
//   }, 2000);
// }, 1000);

const depthTime = (depth) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`depth${depth}`, new Date());
      if (depth >= 3) reject("Already 3-depth!!");
      resolve(depth + 1);
    }, 1000 * depth);
  });
};

console.log("START!", new Date());
depthTime(1).then(depthTime).then(depthTime).catch(console.error);
