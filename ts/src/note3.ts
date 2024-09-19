import { extname } from "path";

function ex1() {
  interface User {
    id: number;
    name: string;
  }
  interface Dept {
    id: number;
    dname: string;
    captain: string;
  }

  type Ud2 =
    | ({
        [key in keyof User]: User[key];
      } & { addr: string })
    | ({
        [key in keyof Dept]: Dept[key];
      } & { addr: string });

  // 다음 코드가 오류가 없으면 통과!
  const ud2: Ud2 = { id: 1, name: "HH", addr: "Seoul" };
  const ud3: Ud2 = { id: 1, dname: "HH", captain: "HH", addr: "Seoul" };
}

function ex2() {
  // 문제2) 다음에서 T3과 동일한 타입으로 T4를 정의하시오.
  const constCart = {
    X: 1,
    Y: 2,
    Z: 3,
  } as const;

  type T3 = 1 | 2 | 3;
  type T4 = (typeof constCart)[keyof typeof constCart];
}

function ex3() {
  type R = Record<string, number>;

  // ex2) 다음 객체들을 하나로 합쳐(extend) 보세요.
  let users = [{ name: "Hong" }, { age: 23 }, { id: 1, addr: "Seoul" }];

  type k = keyof (typeof users)[number];
  type FullUser1 = {
    [key in k]: (typeof users)[number][key];
  };

  type Users = typeof users;
  type FullUser = {
    [key in keyof Users[number]]: Users[number][key];
  };

  const ret: FullUser1 = users.reduce((acc, user) => ({ ...acc, ...user }), {});
}

function ex4() {
  //regist 함수가 다음과 같을 때 파라미터 처리를 해보세요.
  function registUserObj({ name, age }: { name: string; age: number }) {
    const id = 100;
    return { id, name, age };
  }

  type RegistUserObj = Parameters<typeof registUserObj>[number];

  const paramObj: RegistUserObj = { name: "Hong", age: 32 };
  const newUser2 = registUserObj(paramObj);
  console.log("🚀  newUser2:", newUser2);
}

function ex5() {
  function add(a: number, b: string) {
    return `${a} - ${b}`;
  }

  type FirstArgs<F extends (...args: Parameters<F>) => ReturnType<F>> =
    Parameters<F>;
  type SecondArgs<F extends (...args: Parameters<F>) => ReturnType<F>> =
    Parameters<F>;
  type Args<F> = Parameters<F extends (...args: any) => any ? any : any>;

  type k = Parameters<typeof add>[0];
  type A = FirstArgs<typeof add>; // number

  type B = SecondArgs<typeof add>; // string
  type C = Args<typeof add>; // number | string

  // type AX = Args<typeof String.prototype.endsWith>;
  // ⇒ string | number | undefined
  // type AX = Args<typeof String.prototype.charAt>;
  // ⇒ number
}
