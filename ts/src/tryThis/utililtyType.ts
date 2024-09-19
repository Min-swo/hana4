function ex1() {
  interface IUser {
    id: number;
    age: number;
    name: string;
  }

  interface IDept {
    id: number;
    age: string;
    dname: string;
    captain: string;
  }

  type Change<T, K extends keyof T, U> = {
    [k in keyof T]: k extends K ? U : T[k];
  };

  type DeptCaptain = Change<IDept, "captain", IUser>;
  // type Err = Change<IDept, "somekey", IUser>; // Error!!!
}

function ex2() {
  type Item = { item: string; price: number };
  type ItemPrice<T, U> = {
    [k in keyof T]: k extends "item" ? keyof U : T[k];
  };

  const stock = { X: 1, Y: 2, Z: 30 };

  const itemPrices: ItemPrice<Item, typeof stock>[] = [
    { item: "X", price: 1000 },
    { item: "Y", price: 2000 },
    { item: "Z", price: 3000 },
  ];

  const total = itemPrices.reduce(
    (curr, itemPrice) => curr + stock[itemPrice.item] * itemPrice.price,
    0
  );
}

function ex3() {
  type R = Record<string, number>;

  // ex2) 다음 객체들을 하나로 합쳐(extend) 보세요.
  let users = [{ name: "Hong" }, { age: 23 }, { id: 1, addr: "Seoul" }];

  type Users = typeof users;

  type FullUser1 = Record<string, string | number>;
  type FullUser2 = Partial<Record<keyof Users[number], string | number>>;
  type FullUser = {
    [k in keyof Users[number]]: Users[number][k];
  };
  const ret: FullUser = users.reduce((acc, user) => ({ ...acc, ...user }), {});
}

function ex4() {
  function registUserObj({ name, age }: { name: string; age: number }) {
    const id = 100;
    return { id, name, age };
  }

  type RegistUserObj = Parameters<typeof registUserObj>[number];

  const paramObj: RegistUserObj = { name: "Hong", age: 32 };
  const newUser2 = registUserObj(paramObj);
  console.log("🚀  newUser2:", newUser2);
}
