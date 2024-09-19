// interface User2 {
//   id: number;
//   name: string;
//   age: number;
//   address: string;
// }

// type User = {
//   id: number;
//   name: string;
//   age: number;
//   address: string;
// };

// let hong: User;

// const something = ({ id, name, age, address }: User) => {
//   // Do something...
//   hong = {
//     id,
//     name,
//     age,
//     address,
//   };
//   console.log("🚀 ~ hong:", hong);
// };

// something({ id: 1, name: "2", age: 3, address: "4" });

// const strltr = "LITERAL";
// let literal: 'LITERAL';
// // strltr = 'a';
// // literal = 's';
// literal = strltr;
// let str: string;
// str = 'xxxx';
// str = strltr;

// let grade: "S" | "A" | "B" | "C" | "D";

type Member = {
  name: string;
  addr: string;
  discountRate: number;
};
type Guest = {
  name: string;
  age: number;
};

type Customer = Member | Guest;

let customer: Customer;
let m: Member;
let g: Guest;

// customer = {
//   name: "홍길동",
//   addr: "용산구",
//   discountRate: 0.1,
// };

// customer = {
//   name: "홍길동",
//   age: 26,
// };

// customer = {
//   name: "홍길동",
//   age: 26,
//   addr: "용산구",
// };

// customer = {
//   name: "홍길동",
//   addr: "용산구",
//   discountRate: 0.1,
//   age: 26,
// };

// console.log("🚀 ~ customer:", customer);

let xx = {
  name: "홍길동",
  age: 26,
  addr: "용산구",
  discountRate: 0.1,
};

g = xx;
m = xx;

if ("age" in xx) g = xx;
if ("addr" in xx) m = xx;

// console.log("🚀 ~ g:", g);
// console.log("🚀 ~ m:", m);

// let aa: string | number;
// let bb: string | number | undefined;
// aa = bb;
