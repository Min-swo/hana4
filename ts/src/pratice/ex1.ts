for (let i = 0.1; i <= 1; i += 0.1) {
  console.log(+i.toFixed(1));
}

const f = (start: number, end: number, step: number) => {
  for (let i = start; i <= end; i += step) {
    i = +i.toFixed(1);
    console.log(i);
  }
};

f(0.1, 2, 0.1);
