const user = {
  "": 1,
  " ": 1,
  123: 1,
  12345: 2,
  true: 1,
  id: 2,
  [Symbol()]: "Hong",
  [`${new Date()}`]: 365,
  "my-friends": ["Han", "Kim"],
  getInfo: () => `${this.id}-${this.name}`,
  getInfo() {
    return `${this.id}-${this.name}`;
  },
};

user.addr = "Sbeoul";
console.log(user);

function entriesWithSymbol(obj) {
  if (!obj || typeof obj != "object") return [];

  const entries = Object.entries(obj);
  const symbolKeys = Object.getOwnPropertySymbols(obj);
  for (const symKey of symbolKeys) {
    entries.push([symKey, obj[symKey]]);
  }
  return entries;
}

console.log(
  "🚀 ~ entriesWithSymbol ~ entriesWithSymbol:",
  entriesWithSymbol(user)
);

console.log("🚀 ~ Reflect.ownKeys(user):");
function keysWithSymbol(obj) {
  const keys = Reflect.ownKeys(user);
  for (const key of keys) {
    console.log(obj[key]);
  }
}
keysWithSymbol(user);
