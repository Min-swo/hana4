const assert = require("assert");

const hong = { id: 1, name: "Hongi" };
const kim = { id: 2, name: "Kim" };
const lee = { id: 3, name: "Lee" };
const park = { id: 4, name: "Park" };
const jeong = { id: 3, name: "Kangi" };

const users = [hong, kim, lee, park, jeong];

const idxKim = users.indexOf(kim);
console.log("🚀 ~ idxKim:", idxKim);

const findId = (id) => (a) => a.id == id;

// ==> 결국 이거임! 인자로 받고 싶은 걸
// 겉에 함수에서 받아서 그 id를 사용하는 함수를 반환
// quering!!!이래요!
function findId2(id) {
  return (a) => a.id == id;
}

// 각 원소별로 callback 함수 실행 true 반환하는 idx!
const firstIdx3 = users.findIndex((a, i) => a.id == 3);
console.log("🚀 ~ firstIdx3:", firstIdx3);

const lastIdx3 = users.findLastIndex(findId(3));
console.log("🚀 ~ lastIdx3:", lastIdx3);

console.log("====================");

users.forEach((a) => console.log(a.name));

const arr = [1, 2, 3, 4, 5];

const isOdd = (n) => n % 2 != 0;

// forEach 요소들에 대해 인자로 들어온 함수 실행
arr.forEach((a) => console.log(a, isOdd(a)));

// find
const kim2 = users.find((user) => user.name == "Kim");
console.log("🚀 ~ kim2:", kim2);

const hong2 = users.findLast((user) => user.name == "Hongi");
console.log("🚀 ~ hong2:", hong2);

// 함수를 넣어서 true를 반환하는 애들만 줌
const hasIUsers = users.filter((user) => user.name.includes("i"));
console.log("🚀 ~ hasIUsers:", hasIUsers);

// map, 함수를 넣어서 return값을 list로
const names = users.map((user) => user.name);
console.log("🚀 ~ names:", names);

const isPrime = (n) => {
  if (n == 1) return false;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
};

const makeArray = (n, k = 1) => Array.from({ length: n }, (_, i) => i + k);

const isPrimeArray = (n) => {
  if (n == 1) return false;

  // 바로 만드는 느낌 ~> 객체를 바로 생성해서 index를
  //   const arr = Array.from({ length: Math.sqrt(n) - 1 }, (_, i) => i + 2);
  const arr = makeArray(Math.sqrt(n) - 1, 2);

  // 아래 것은 array를 만들고 key를 뽑아서 iter를 돌림
  // 비효율적!
  // const arr = Array.from(Array(len).keys());

  //   console.log(arr);

  return !arr.some((a) => n % a == 0);
};

console.log(isPrimeArray(2));

const hasPrime = (arr) => arr.some((a) => isPrime(a));
// const hasPrime = (arr) => arr.some(isPrime);
console.log("🚀 ~ hasPrime:", hasPrime(arr));

const getPrime = (arr) => arr.filter((a) => isPrime(a));
// const getPrime = (arr) => arr.filter(isPrime);
console.log("🚀 ~ getPrime:", getPrime(arr));

// console.log(isPrime(6));///

const arr100 = Array.from({ length: 100 }, (_, i) => i + 1);
console.log(arr100);

const arr200 = makeArray(200);
console.log(arr200);
