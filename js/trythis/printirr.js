function isSquared(x) {
  for (let i = 1; i <= Math.sqrt(x); i++) {
    if (x == i * i) return true;
  }
  return false;
}

function printIrr(x) {
  for (let i = x + 1; ; i++) {
    console.log(i - 1, Math.sqrt(i - 1).toFixed(3));
    if (isSquared(i)) break;
  }
}

printIrr(5);
console.log("");
printIrr(9);
