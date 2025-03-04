let a6 = ["Kim", "Lee", "Hong"];
a6.sort(); // a6 = ['Hong', 'Kim', 'Lee']
console.log("🚀 ~ a6:", a6);

a6 = ["Kim", "Lee", "Hong"];
a6.sort((a, b) => b - a); // ?
console.log("🚀 ~ a6:", a6);

console.log("Kim" < "Lee");
console.log("Kim" - "Lee");

a6 = ["Kim", "Lee", "Hong"];
a6.sort((a, b) => (b > a ? 1 : -1)); // ?
console.log("🚀 ~ a6:", a6);
