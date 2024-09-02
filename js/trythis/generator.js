function* gener() {
  const x = yield 1;
  const y = yield x + 10;
  console.log("x y =", x, y);
  return x + y;
}
const it3 = gener();
console.log(it3.next());
console.log(it3.next(3));
console.log(it3.next(5));
