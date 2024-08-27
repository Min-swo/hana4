console.log("Hello, World!");

let a = 1;
let b = 2;

let c = (a++, b++);
let d = (a--, b + a);
console.log("🚀 ~ a, b, c, d:", a, b, c, d);

function f() {}

const x = f();
console.log("🚀 ~ x", x);

if ("false") {
  console.log("🚀 ~ 'false' is true");
}

if (false) {
  console.log("🚀 ~ false is true");
} else {
  console.log("🚀 ~ false is false");
}

const s = `${a} + ${b} = ${a + b}`;
console.log("🚀 ~ s:", s);

var y = 0;
console.log(true | y++, true && y++, y);
console.log(false | y++, false && y++, y);

const first = "";
let k = first && " ";
console.log("🚀 ~ k:", k);

const last = "Bob";
console.log(`${first}${first && " "}${last}`);

let aa = 0b1010;
let bb = 0b1100;
const cc = aa & bb;
console.log("🚀 ~ cc:", cc.toString(2));

const R = 1;
const W = 2;
const E = 4;

let auth = parseInt("011", 2);
console.log("🚀 ~ auth:", auth);
console.log("auth-bin>>", `0b0${auth.toString(2)}`);

const hasWriteAuth = auth & W;
console.log("🚀 ~ hasWriteAuth:", hasWriteAuth);
const hasExeAuth = auth & E;
console.log("🚀 ~ hasExeAuth:", hasExeAuth);
const hasReadAndExeAuth = auth & (R | E);
console.log("🚀 ~ hasReadAndExeAuth:", hasReadAndExeAuth);
auth = auth ^ E; // XOR
console.log("🚀 ~ auth:", auth);

console.log("🚀 ~ isFinite:", isFinite(Infinity));
