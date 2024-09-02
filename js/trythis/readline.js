const readline = require("readline");
const { stdin: input, stdout: output } = require("process");

function* add() {
  const x = yield "첫 번째 수? ";
  const y = yield "두 번째 수? ";
  console.log(`Total: ${x + y}`);
  return x + y;
}

const itAdd = add();
// console.log(itAdd.next(1).value);
// console.log(itAdd.next(2).value);

const rl = readline.createInterface({ input, output });

console.log(itAdd.next().value);
rl.on("line", (ans) => {
  const { value, done } = itAdd.next(+ans);
  console.log(value);
  if (done == true) rl.close();
});

rl.on("close", function () {
  process.exit();
});
