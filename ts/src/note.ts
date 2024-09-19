// function ex1() {
//   const songs = ["One More Time", "I AM", "Cry"];

//   // song : string
//   // index : number
//   songs.forEach((song, index) => {
//     console.log(`${song} is at index ${index}`);
//   });
//   return songs;
// }

// const songs = ["Juice", "Painkiller", "Candy"];

// function runOnSongs(getSongAt: (index: number) => string) {
//   for (let i = 0; i < songs.length; i += 1) {
//     console.log(getSongAt(i));
//   }
// }
// function getSongAtX(index: number) {
//   return `${songs[index]}`;
// }
// runOnSongs(getSongAtX); // OK

// function logSong(song: string) {
//   return `${song}`;
// }

// function fap(index: number): string {
//   return `${index}`;
// }

// function fnc(fap: (index: number) => string): number {
//   return parseInt(fap(1));
// }

// interface SomeInterface {
//   [key: string]: number;
// }

// let is: SomeInterface = {
//   one: 1,
//   two: 2,
//   //   three: "tree", // value should be string!!
// };

// is["one"]?.toFixed(2); // OK
// is["four"]?.toFixed(2); // false: OK, but Runtime Error in JS!
// is["four"]?.toFixed(2); // true: Error in TS Compiling!

// const lim = ["Lim", 26];

// let limTup: [string, number] = lim;

// const a: [number, string, boolean] = [1, "lim", false];

// let b: [number, string] = a;

// const greeting = (greet: "Hi" | "Hello", name: string, age: number) => {
//   console.log(`${greet}~!
//                   ${name}(${age})`);
// };

// const tup1: ["Hi", string, number] = ["Hi", "Lim", 26];
// const tup2: [string, number] = ["Lim", 26];
// const arr = ["Park", 30];

// greeting(...tup1); // OK
// greeting("Hello", ...tup2); // OK
// greeting("Hi", ...arr); // Error

// const getPerson = () => {
//   // do something...

//   return ["Lim", 20] as const; // ②
// };

// const person1 = ["Lim", 20]; // ①
// const person2 = getPerson();

// person1, person2 모두 (string | number)[]

// const myInfo = ["Lim", 20]; // (string|number)[]

// const yourInfo: [string, number] = ["Park", 30];
// // [string, number]

// const dogInfo = ["Jama", 3] as const; //tuple + readonly
// // readonly ["Jama", 3]

// yourInfo[0] = "Hong"; // OK
// dogInfo[0] = "Cream"; // 수정 불가!

// Cannot assign to '0' because it is a read-only property.

// const getNameAgeArr = () => ['Lim', 30];

// const getNameAgeTuple = () => ['Jang', 20] as const;

// const [name1, age1] = getNameAgeArr();
// // name1: string | number
// // age1: string | number

// const [name2, age2] = getNameAgeTuple();
// // name2: "Jang"
// // age2: 20

// type A = [string, number]; // Tuple
// type AA = (string | number)[]; // Array

// type B = [boolean, ...A]; // Tuple
// type BB = [boolean, ...AA]; // Tuple
// let bb: BB = [false, ...["a", 1, "b", 2, 3]];

// function f(name: string, age: number) {

//   console.log(arguments);
// }

// f(...["zzz", 10]);

// const arr1 = ["hong", 22];
// f(...arr1);

// const arr2: [string, number] = ["hong", 22];
// // f(...arr2);

// interface A {
//   id: number | string;
// }

// interface B {
//   id: number;
// }

// // OK
// interface C extends A {
//   name: string;
//   id: number;
// }

// Types of property 'id' are incompatible.
//   Type 'string | number' is not assignable to type 'number'.
// interface D extends B {
//   name: string;
//   id: number | string;
// }

type A = {
  a: string;
  b: string;
};

type AA = A & { c: number; d: number };
