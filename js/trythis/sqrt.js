for (let i = 1; i <= 10; i++) {
  let flag = 0;
  for (let j = 1; j <= Math.sqrt(i); j++) {
    if (i == j * j) {
      flag = 1;
    }
  }

  if (flag == 0) {
    console.log(Math.sqrt(i).toFixed(3));
  }
}
