var sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log("🚀 ~ sum:", sum);

sum = 0;
let i = 0;
while (i <= 100) {
  sum += i;
  i += 1;
}
console.log("🚀 ~ sum:", sum);

sum = 0;
i = 0;
do {
  i += 1;
  sum += i;
} while (i < 100);
console.log("🚀 ~ sum:", sum);
