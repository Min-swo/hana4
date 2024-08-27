function makeArray(n) {
  if (n == 1) return [1];

  return [...makeArray(n - 1), n];
}

function makeReverseArray(n) {
  if (n == 1) return [1];

  return [n, ...makeArray(n - 1)];
}

function makeArrayTco(n, arr = [n]) {
  if (n == 1) return [1, ...arr];

  return makeArray(n - 1, [n - 1, ...arr]);
}

function factorialDP(n) {
  let arr = Array(n)
    .fill(0)
    .map((_, i) => i + 1);

  arr[0] = 1;
  arr[1] = 1;
  for (let i = 2; i < n; i++) {
    arr[i + 1] = i * arr[i];
  }
  return arr[n];
}

console.log(makeArray(10));
console.log(makeReverseArray(10));
console.log(makeArrayTco(10));
console.log("🚀 ~ factorialDP ~ factorialDP:", factorialDP(5));
