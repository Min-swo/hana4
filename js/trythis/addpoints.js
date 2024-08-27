function pointLen(a) {
  return a.toString().length - Math.trunc(a).toString.length - 1;
}

function addPoints(a, b) {
  let aLen;
  let bLen;
  aLen = a.toString().split(".")[1].length;
  bLen = b.toString().split(".")[1].length;

  aLen = pointLen(a);
  bLen = pointLen(b);

  let maxLen = aLen > bLen ? aLen : bLen;

  return parseFloat((a + b).toFixed(maxLen));
}

console.log(addPoints(0.21354, 0.1));
console.log(addPoints(0.14, 0.28)); // 0.42
console.log(addPoints(0.34, 0.226)); // 0.566
