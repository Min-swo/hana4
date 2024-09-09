const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("XX");
    resolve("OK");
    // reject("Error");
  }, 1000);
});

console.log("p=", p);
p.then((succResult) => {
  console.log("🚀 ~ p.then ~ succResult:", succResult, p);
  return new Promise((resolve) => resolve("OK22"));
});

const ppp = p
  .then((succResult) => {
    console.log("🚀 ~ p.then ~ succResult:", succResult, p);
    return new Promise((resolve) => resolve("OKPPP"));
  })
  .then((y) => {
    console.log("y=", y);
    return "zzzz";
  });

ppp.then((x) => console.log("ppp.x = ", x));
p.then((x) => console.log("ppp.x = ", x));

// .catch((error) => {
//   console.log("🚀 ~ p.then ~ error:", error);
// });
