// const promiseFn = (id = 1) =>
//   new Promise((resolve, reject) => {
//     console.log("id>>", id);
//     if (id < 7) resolve(id + 1);
//     reject(new Error("어디로?" + id));
//   });

// promiseFn(1)
//   .then((res) => {
//     console.log("res1>>", res);
//     promiseFn(res); // Need Return the Promise Object!!
//     return Promise.reject("eeee");
//   })
//   .then((res) => {
//     console.log("res2>>", res); // res가 undefined 이라면 ⇒ 여기서 throw 하면 될까?
//   })
//   .catch((err) => console.log("Error!!>>", err));

// const promiseFn = (id) =>
//   new Promise((resolve, reject) => {
//     console.log("id>>", id);
//     if (id < 5) resolve(id + 1);
//     else reject(new Error("어디로?" + id));
//   });

//   promiseFn(1)
//   .then((res) => {
//       // console.log("res1>>", res);
//       return promiseFn(res); // 2
//     })
//     .then((res) => {
//         // console.log("res2>>", res);
//     return promiseFn(res); // 3
// })
// .then(promiseFn) // 4
// .then((res) => promiseFn(res)) // 5
// .catch((err) => console.log("Error!!>>", err));

const randTime = (val) =>
  new Promise((resolve) =>
    setTimeout(() => {
      console.log(val);
      resolve(val + 1);
    }, Math.random() * 1000)
  );

randTime(1)
  .then((res) => {
    // console.log("res1>>", res);
    return randTime(res); // 2
  })
  .then((res) => {
    // console.log("res2>>", res);
    return randTime(res); // 3
  })
  .then(randTime) // 4
  .then((res) => randTime(res)) // 5
  .catch((err) => console.log("Error!!>>", err));
