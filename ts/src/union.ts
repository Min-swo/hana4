const member: Member = {
  name: "홍길동",
  addr: "용산구",
  discountRate: 0.1,
};
const guest: Guest = {
  name: "김길동",
  age: 28,
};

// const who = Math.random() > 0.5 ? member : guest;

// who.name = "마길동"; // OK 접근 가능

// // Error! Property 'discountRate' does not exist on type 'Member | Guest'.
// //  Property 'discountRate' does not exist on type 'Guest'.
// const price = 10000 - 10000 * who.discountRate;

let who: Member | Guest;
who = {
  name: "홍길동",
  //   age: 24,
  addr: "용산구",
  discountRate: 0.1,
};
// who; // const who: Member
const price = 10000 - 10000 * who.discountRate;
