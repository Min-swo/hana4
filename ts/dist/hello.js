"use strict";
const myName = "Min-swo";
console.log(`Hello, ${myName}`);
const myAge = 24;
console.log("🚀 ~ myAge:", myAge);
let i;
i = "str";
console.log(typeof i);
console.log("🚀 ~ i:", i);
function fi(n) {
    i = n;
    i.toFixed();
    console.log("🚀 ~ fi ~ i:", i);
}
fi(10);
console.log("🚀 ~ i:", i);
// i.toFixed(); // Property 'toFixed' does not exist on type 'string'
