// import assert from "assert";
// declare global {
//   interface Array<T> {
//     first(): T;
//     mapBy<K extends keyof T>(key: K): T[K][];
//     filterBy<K extends keyof T>(key: K, value: T[K]): T[K][];
//     rejectBy: (prop: string, value: number) => any;
//     findBy: (prop: string, value: number) => any;
//     sortBy: (prop: string) => any;
//   }
// }

// Array.prototype.mapBy = function <T, K extends keyof T>(
//   this: T[],
//   prop: K
// ): T[K][] {
//   return this.map((a) => a[prop]);
// };

// Array.prototype.filterBy = function <T, K extends keyof T>(
//   this: T[],
//   prop: K,
//   value: T[K],
//   isIncludes = false
// ) {
//   const cb = isIncludes
//     ? (a) => a[prop]?.isIncludes(value)
//     : (a) => a[prop] === value;
//   return this.filter(cb);
// };

// Array.prototype.rejectBy = function (prop, value, isIncludes = false) {
//   const cb = isIncludes
//     ? (a) => !a[prop]?.isIncludes(value)
//     : (a) => a[prop] !== value;
//   return this.filter(cb);
// };

// Array.prototype.findBy = function (prop, value) {
//   return this.find((a) => a[prop] === value);
// };

// Array.prototype.sortBy = function (prop) {
//   console.log("🚀 ~ prop:", prop);
//   const [key, direction = "asc"] = prop.split(":");
//   const dir = direction.toLowerCase() === "desc" ? -1 : 1;
//   console.log("🚀 ~ key:", key);
//   console.log("🚀 ~ dir:", dir);

//   return this.toSorted((a, b) => (a[key] < b[key] ? -1 : 1));
// };

// // const arr = [1, 2, 3, 4, 5];
// // assert.deepStrictEqual([arr.firstObject, arr.lastObject], [1, 5]);
// // arr.firstObject = 10;
// // arr.lastObject = 50;
// // assert.deepStrictEqual([arr.firstObject, arr.lastObject], [10, 50]);

// // const arr2 = [];
// // assert.deepStrictEqual([arr2.firstObject, arr2.lastObject], [,]);
// // arr2.firstObject = 10;
// // arr2.lastObject = 50;
// // assert.deepStrictEqual([arr2.firstObject, arr2.lastObject], [10, 50]);

// const hong = { id: 1, name: "Hong" };
// const kim = { id: 2, name: "Kim" };
// const lee = { id: 3, name: "Lee" };
// const users = [hong, lee, kim]; // 오염되면 안됨!!

// // assert.deepStrictEqual(users.mapBy("id"), [1, 3, 2]);
// // assert.deepStrictEqual(users.mapBy("name"), ["Hong", "Lee", "Kim"]);

// // assert.deepStrictEqual(users.filterBy("id", 2), [kim]);
// // assert.deepStrictEqual(users.rejectBy("id", 2), [hong, lee]);

// // assert.deepStrictEqual(users.findBy("name", "Kim"), kim);

// assert.deepStrictEqual(users.sortBy("name"), [hong, kim, lee]);
// console.log(users.sortBy("name:desc"));

// // assert.deepStrictEqual(users.sortBy("name:desc"), [lee, kim, hong]);

// // assert.deepStrictEqual(users.firstObject, hong);
// // assert.deepStrictEqual(users.lastObject, kim);

// // users.lastObject = lee;
// // assert.deepStrictEqual(users.firstObject, lee);
// // users.lastObject = hong;
// // assert.deepStrictEqual(users.lastObject, hong);
// export {};
