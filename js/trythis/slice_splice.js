const arr2 = [1, 2, 3, 4, 5];

console.log("🚀 ~ ex1:", arr2.slice(1, 3));
console.log("🚀 ~ ex2:", arr2.slice(2));

const tmp = arr2.splice(1, 3);
console.log("🚀 ~ ex3:", arr2);

arr2.splice(1, 0, ...tmp);
console.log("🚀 ~ ex4:", arr2);

const tmp2 = arr2.splice(2);
console.log("🚀 ~ ex5:", arr2);

arr2.splice(2, 0, ...tmp2);
console.log("🚀 ~ ex6:", arr2);

arr2.splice(2, 1, "X", "Y", "Z");
console.log("🚀 ~ ex7:", arr2);

arr2.splice(2, 3);
arr2.splice(2, 0, 3);
console.log("🚀 ~ arr2:", arr2);

const makeArray = (arr, idx, input) => {
  return [...arr.slice(0, idx), ...input, ...arr.slice(idx + 1)];
};

const arr3 = makeArray(arr2, 2, ["X", "Y", "Z"]);
console.log("🚀 ~ ex8:", arr3);
