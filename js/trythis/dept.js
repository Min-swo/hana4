const assert = require("assert");

// const assert = require("assert");

// const hrTeam = { id: 1, dname: "인사팀" };
// const devTeam = { id: 2, dname: "개발팀" };
// const depts = [hrTeam, devTeam];

// const hong = { id: 1, name: "Hong", dept: 1 };
// const kim = { id: 2, name: "Kim", dept: 2 };
// const emps = [
//   hong,
//   kim,
//   { id: 3, name: "Park", dept: 2 },
//   { id: 4, name: "Choi", dept: 2 },
// ];

// const deptMap = new Map();
// depts.forEach((dept) => deptMap.set(dept.id, dept));

// const empMap = new Map();
// emps.forEach((emp) => empMap.set(emp.id, emp));

// const empDept = new Map();
// emps.forEach((emp) => {
//   empDept.set(emp, deptMap.get(emp.dept));
//   delete emp.dept;
// });

// console.log(deptMap);
// console.log(empMap);
// console.log(empDept);
// console.log(empDept.get(kim).dname);

// assert.deepStrictEqual(
//   [...empDept.keys()],
//   emps.map(({ id, name }) => ({ id, name }))
// );
// assert.strictEqual(empDept.get(kim)?.dname, devTeam.dname);

Array.prototype.uniqBy = function (prop) {
  if (!prop && prop !== 0) return [...new Set(this)];
  return [...new Set(this.map((a) => a[prop]))];
};

const hong = { id: 1, name: "Hong", dept: "HR" };
const kim = { id: 2, name: "Kim", dept: "Server" };
const lee = { id: 3, name: "Lee", dept: "Front" };
const park = { id: 4, name: "Park", dept: "HR" };
const ko = { id: 7, name: "Ko", dept: "Server" };
const loon = { id: 6, name: "Loon", dept: "Sales" };
const choi = { id: 5, name: "Choi", dept: "Front" };
const users = [hong, kim, lee, park, ko, loon, choi];
console.log(users.uniqBy("dept"));
["HR", "Server", "Front", "Sales"];

assert.deepStrictEqual(users.uniqBy("dept"), [
  "HR",
  "Server",
  "Front",
  "Sales",
]);

const arr = [1, 2, 2, 3, 4, 5, 6, 5];
assert.deepStrictEqual(arr.uniqBy(), [...new Set(arr)]);
