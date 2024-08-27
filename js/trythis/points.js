for (let i = 1; i <= 10; i++) {
  n = i / 10;
  console.log(n);
}

// Number 형태로 변화하려면 +를 붙이거나 Number()
for (let i = 0.1; i < 1; i += 0.1) {
  console.log(+i.toFixed(1));
}
