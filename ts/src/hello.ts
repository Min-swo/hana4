const myName: string = "Min-swo";
console.log(`Hello, ${myName}`);
const myAge: number = 24;
console.log("🚀 ~ myAge:", myAge);

let x: number | string = 1;
console.log("🚀 ~ x:", x);
x = "abc";
console.log("🚀 ~ x:", x);

const len = x.length;

// let cher = {
//   firstName: "John",
//   lastName: "ahn",
// };

// cher.middleName = 'hi';

// let team: string;
// console.log(team?.length); // error! why??
// // Variable 'teamName' is used before being assigned.ts(2454)

// team = "blue";
// console.log(team.length); // ok!

// let coach: string | undefined;
// console.log(coach?.length); // ok! why??

// coach = "Han";
// console.log(coach.length); // ok!

// let i;
// i = "str";
// console.log(typeof i);
// console.log("🚀 ~ i:", i);

// function fi(n: number) {
//   i = n;
//   i.toFixed();
//   console.log("🚀 ~ fi ~ i:", i);
// }

// fi(10);
// console.log("🚀 ~ i:", i);
// i.toFixed(); // Property 'toFixed' does not exist on type 'string'
