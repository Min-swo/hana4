// #1
// for (let i = 0.1; i <= 100000; i += 0.1) {
//   console.log(+i.toFixed(1));
// }

// #2
// function printIrr(x) {
//   for (let i = x + 1; ; i++) {
//     console.log(i - 1, Math.sqrt(i - 1));
//     if (Number.isInteger(Math.sqrt(i))) break;
//   }
// }

// printIrr(5);
// printIrr(9);

// #3
// const week = "일월화수목금토";

// const today = new Date();
// const day = today.getDay();
// console.log("오늘은", week[day] + "요일 입니다.");

function addPoints(a, b) {
  let aLen;
  let bLen;

  aLen = a.toString().split(".")[1]?.length ?? 0;
  bLen = b.toString().split(".")[1]?.length ?? 0;
  console.log(aLen, bLen);
  let maxLen = aLen > bLen ? aLen : bLen;
  return (a + b).toFixed(maxLen);
}

console.log(addPoints(1, 1));
