const debounce = (cb, delay) => {
  let timer;
  return (i) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(cb, delay, i);
  };
};

const throttle = (cb, delay) => {
  let timer;
  return (i) => {
    if (timer) return;
    timer = setTimeout(() => {
      cb(i);
      timer = null;
    }, delay);
  };
};

const debo = debounce((a) => console.log(a + 1), 500);
for (let i = 10; i < 15; i++) debo(i); // 15 출력
const thro = throttle((a) => console.log(a + 1), 500);
for (let i = 10; i < 15; i++) thro(i); // 11 출력
