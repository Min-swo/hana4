const once = (fn, delay = 1000) => {
  const done = {};
  return function (...arg) {
    if (done[fn] == 1) {
      return;
    }
    done[fn] = 1;
    setTimeout(() => (done[fn] = 0), delay);
    return fn.call(this, ...arg);
  };
};

const fn = once((x, y) => `금일 운행금지 차량은 끝번호 ${x}, ${y}입니다!`);
console.log(fn(1, 6)); // 금일 운행금지 차량은 끝번호 1, 6입니다!
console.log(fn(2, 7)); // undefined
console.log(fn(3, 8)); // undefined

const intl = setInterval(() => {
  console.log(fn(3, 8));
}, 100);

// function fivePart(x, y) {
//   return `fivePart ${x}, ${y}, id: ${this.id}`;
// }
// const fn = once(fivePart.bind({ id: 11 }));
// console.log(fn(1, 2));
// const fn2 = once(fivePart);
// console.log(fn2.bind({ id: 22 })(3, 4));
