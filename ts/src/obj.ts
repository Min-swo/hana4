// 타입 별칭(type alias)
type TUser = {
  id: number;
  name: string;
};

let hong: TUser;
hong = { id: 1, name: "Hong" }; // OK
hong = { id: 1 }; // Error (name property missing)
hong = { id: 1, name: "Hong", addr: "Pusan" }; // Error(not assignable)  Freshness!
hong = { id: 1, name: "Hong", addr: "Pusan" } as TUser; // OK (turn-off Freshness!)

let xuser: { id: number; name: string };
xuser = { id: 1, name: "xx" }; // OK
xuser = { id: 1 }; // Error (Property 'name' missing in type)
xuser = { id: 1, name: "xx", age: 30 };
xuser = { id: 1, name: "xx" };
const tmp = { id: 1, name: "xx", age: 30 };
xuser = tmp; // Error ({id, name, age} is not assignable to type {id,name} )

type Emp = { id: number; name: string };
const lee: Emp = { id: 1, name: "Lee" };
const kim = { id: 2, name: "Kim", addr: "Seoul" };

const arr0: Emp[] = [{ id: 1, name: "Hong" }];
const arr1: Emp[] = [{ id: 1, name: "Hong" }, kim];
const arr2: Emp[] = [{ id: 2, name: "Kim", addr: "Seoul" }, kim];
const arr3: Emp[] = [{ id: 2, name: "Kim", addr: "Seoul" }, lee];

const arr4: [Emp, Emp] = [{ id: 2, name: "Kim", addr: "Seoul" }, kim];

type Emp2 = { id: number; name: string; addr: string };
type Emp3 = { id: number; name: string; road: string };

const xemp: Emp | Emp2 | Emp3 = {
  id: 1,
  name: "xxx",
  addr: "Pusan",
  road: "Sumyun",
};

export {};
