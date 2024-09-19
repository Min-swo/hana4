import assert from "assert";

function ex1() {
  for (let i = 0.1; i <= 1; i += 0.1) {
    console.log(((i = +i.toPrecision(1)), i));
  }
}

// ex1();

function ex2() {
  const getSqrtWithFixed = (n) => +Math.sqrt(n).toFixed(3);

  const printIrr = (n) => {
    let sqrt = getSqrtWithFixed(n);
    console.log(n++, sqrt);
    while (true) {
      sqrt = getSqrtWithFixed(n);
      if (Number.isInteger(sqrt)) break;
      console.log(n++, sqrt);
    }
  };

  printIrr(5);
  console.log();
  printIrr(9);
}

// ex2();

function ex3() {
  const WEEKDAYS = "일월화수목금토";
  const today = new Date();
  console.log(WEEKDAYS[today.getDay()]);
}

// ex3();

function ex4() {
  const getPointsLen = (n) =>
    n.toString().length - parseInt(n).toString().length - 1;

  const addPoints = (a, b) => {
    const lenA = getPointsLen(a);
    const lenB = getPointsLen(b);
    return +(a + b).toFixed(lenA > lenB ? lenA : lenB);
  };

  assert.deepStrictEqual(addPoints(0.21354, 0.1), 0.31354);
  assert.deepStrictEqual(addPoints(0.14, 0.28), 0.42);
  assert.deepStrictEqual(addPoints(0.34, 0.226), 0.566);
  assert.deepStrictEqual(addPoints(10.34, 200.226), 210.566);
  assert.deepStrictEqual(addPoints(0.143, -10.28), -10.137);
}

// ex4();

function ex6() {
  const arr = [1, 2];
  [arr[0], arr[1]] = [arr[1], arr[0]];
  assert.deepStrictEqual(arr, [2, 1]);
}

// ex6();

function ex7() {
  function f1(user) {
    console.log(user.id, user.name);
  }
  function f2({ id, name }) {
    console.log(id, name);
  }
  const f3 = ({ id, name }) => {
    console.log(id, name);
  };
}

// ex7();

function ex8() {
  const user = { id: 1, name: "hong", passwd: "xxx", addr: "Seoul" };
  const { passwd, ...userInfo } = user;
  console.log(userInfo);
}

// ex8();

function ex9() {
  const arr = [[{ id: 1 }], [{ id: 2 }, { id: 3 }]];
  const [[{ id: id1 }], [{ id: id2 }, { id: id3 }]] = arr;
  console.log(id1, id2, id3);
}

// ex9();

function ex10() {
  const user = { name: "Hong", passwd: "xyz", addr: "Seoul" };
  function getValueExceptInitial(k) {
    const { [k]: val } = user;
    const [first, ...rest] = val;
    return rest.join("");
  }
  console.log(getValueExceptInitial("name")); // 'ong'
  console.log(getValueExceptInitial("passwd")); // 'yz'
  console.log(getValueExceptInitial("addr")); // 'eoul'
}

// ex10();

function ex13() {
  const makeArray = (n) => {
    if (n == 1) return [1];

    return [...makeArray(n - 1), n];
  };

  const makeReverseArray = (n) => {
    if (n == 1) return [1];

    return [n, ...makeReverseArray(n - 1)];
  };

  console.log(makeArray(10));
  console.log(makeReverseArray(10));
}

// ex13();

function ex14() {
  const loopFibonacci = (n) => {
    let first = 0;
    let second = 1;
    for (let i = 0; i < n; i++) {
      [second, first] = [first + second, second];
    }
    return first;
  };

  const recursiveFibonacci = (n) => {
    if (n == 0) return 0;
    if (n == 1) return 1;
    return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
  };

  function memoized(fn) {
    const memoizedTable = {};
    return (n) => memoizedTable[n] ?? (memoizedTable[n] = fn(n));
  }

  const memoizedFibonacci = memoized((n) => {
    if (n == 0 || n == 1) return n;
    return memoizedFibonacci(n - 1) + memoizedFibonacci(n - 2);
  });

  console.log(loopFibonacci(5));
  console.log(loopFibonacci(7));
  console.log(loopFibonacci(15));

  console.log(recursiveFibonacci(7));

  console.log(memoizedFibonacci(15));
}

// ex14();

function ex16() {
  const arr = [100, 200, 300, 400, 500, 600, 700];

  const forInKeys = (arr) => {
    const ret = [];
    for (const idx in arr) ret.push(idx);
    return ret;
  };

  const forInValues = (arr) => {
    const ret = [];
    for (const idx in arr) ret.push(arr[idx]);
    return ret;
  };

  assert.deepStrictEqual(forInKeys(arr), Object.keys(arr));
  assert.deepStrictEqual(forInValues(arr), Object.values(arr));

  const obj = {
    name: "Kim",
    addr: "Yongsan",
    level: 1,
    role: 9,
    receive: false,
  };

  const objForInKeys = (obj) => {
    const ret = [];
    for (const key in obj) ret.push(key);
    return ret;
  };

  const objForInValues = (obj) => {
    const ret = [];
    for (const key in obj) ret.push(obj[key]);
    return ret;
  };

  const objForOfValues = (obj) => {
    const ret = [];
    for (const val of Object.values(obj)) ret.push(val);
    return ret;
  };

  console.log(objForInKeys(obj));
  console.log(objForInValues(obj));
  console.log(objForOfValues(obj));
}

// ex16();

function ex17() {
  const makeObjectFromArray = (arr) => {
    const obj = {};
    for (const val of arr) {
      const [key, ...rest] = val;
      obj[key] = rest;
    }
    return obj;
  };

  const makeArrayFromObject = (obj) => {
    const arr = [];
    for (const key in obj) {
      arr.push([key, ...obj[key]]);
    }
    return arr;
  };

  const arr = [
    ["A", 10, 20],
    ["B", 30, 40],
    ["C", 50, 60, 70],
  ];

  const newObj = makeObjectFromArray(arr);
  assert.deepStrictEqual(newObj, {
    A: [10, 20],
    B: [30, 40],
    C: [50, 60, 70],
  });
  const newArr = makeArrayFromObject(newObj);
  assert.deepStrictEqual(newArr, arr);
}

// ex17();

function ex18() {
  const shallowCopy = (obj) => {
    const newObj = {};
    for (const key in obj) {
      newObj[key] = obj[key];
    }
    return newObj;
  };

  function isObject(obj) {
    return !obj || typeof obj == "object";
  }

  const deepCopy = (obj) => {
    if (!isObject(obj)) return obj;

    const newObj = {};
    for (const key of Reflect.ownKeys(obj)) {
      newObj[key] = deepCopy(obj[key]);
    }

    return newObj;
  };

  // shallow copy
  const kim = { nid: 3, nm: "Kim", addr: { city: "Pusan" } };
  const shallowKim = shallowCopy(kim);
  shallowKim.addr.city = "Ulsan";
  console.log(kim.addr.city === shallowKim.addr.city); // true면 통과!

  // deep copy
  const deepKim = deepCopy(kim);
  deepKim.addr.city = "Daegu";
  console.log(kim.addr.city !== deepKim.addr.city); // true면 통과!
}

// ex18();

function ex19() {
  const dog = {
    name: "Maxx",
    showMyName() {
      console.log(`My name is ${this.name}.`);
    },
    whatsYourName() {
      // setTimeout(this.showMyName, 1000);
      setTimeout(() => this.showMyName(), 1000);
    },
  };

  dog.whatsYourName();
}

// ex19();

function ex20() {
  const once = (fn) => {
    let flag = false;

    return (...args) => {
      if (!flag) {
        flag = true;
        setTimeout(() => {
          flag = false;
        }, 1000);
        return fn(...args);
      }
    };
  };

  const fn = once((x, y) => `금일 운행금지 차량은 끝번호 ${x}, ${y}입니다!`);
  console.log(fn(1, 6));
  console.log(fn(2, 7));
  console.log(fn(3, 8));
  // setInterval(() => console.log(fn(1, 6)), 100);
}

// ex20();

function ex22() {
  const getNextWeek = (() => {
    const weeks = ["일", "월", "화", "수", "목", "금", "토"];

    let widx = -1;
    return () => {
      widx += 1; // side-effect!
      if (widx >= weeks.length) widx = 0;
      return `${weeks[widx]}요일`;
    };
  })();

  let cnt = 0;
  const intl = setInterval(() => {
    // widx += 2; // side-effect!
    console.log("call", cnt, getNextWeek());
    if ((cnt += 1) === 8) clearInterval(intl);
  }, 1000);
}

ex22();
