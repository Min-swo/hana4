const objs = [{ id: 1 }, { name: "Hong" }, { addr: "Seoul", id: 5 }];

const newObj = objs.reduce((acc, obj) => ({ ...acc, ...obj }), "");

console.log("🚀 ~ newObj ~ newObj:", newObj);
