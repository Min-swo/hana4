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

// ex22();

function ex14_2() {
  const memoized = (fn) => {
    const memoizedTable = [];
    return (n) => memoizedTable[n] ?? (memoizedTable[n] = fn(n));
  };

  const memoizedFibonacci = memoized((n) => {
    if (n === 0 || n === 1) return n;
    return memoizedFibonacci(n - 1) + memoizedFibonacci(n - 2);
  });

  console.log(memoizedFibonacci(7));
}

// ex14_2();

function ex24() {
  function getDiffMillis(dt1, dt2) {
    const { getTime: getTime1 } = new Date(dt1);
    const { getTime: getTime2 } = new Date(dt2);
    return getTime1.apply(new Date(dt1)) - getTime2.apply(new Date(dt2));
  }

  console.log(getDiffMillis("2021-01-01", "2021-01-02"));
}

// ex24();

function ex25() {
  const isPrime = (n) => {
    if (n === 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return true;
  };

  const hasPrime = (arr) => arr.map(isPrime).includes(true);
  const hasPrime2 = (arr) => arr.some(isPrime);

  const primeNumbers = (arr) => arr.filter(isPrime);

  console.log(hasPrime2([1, 4, 6]));
  console.log(primeNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]));
}

// ex25();

function ex26() {
  const arr = [1, 2, 3, 4, 5];

  // ex1) [2,3]을 추출
  console.log(arr.slice(1, 3));

  // ex2) [3]부터 모두 다 추출
  console.log(arr.slice(2));

  // ex3) [2,3,4] 제거하기
  let tmp = arr.splice(2, 3);
  console.log(arr);

  // ex4) 복원하기
  arr.splice(2, 0, ...tmp);
  console.log(arr);

  // ex5) [3] 부터 끝까지 제거하기
  tmp = arr.splice(2, Infinity);
  console.log(arr);

  // ex6) 복원하기
  arr.splice(2, 0, ...tmp);
  console.log(arr);

  // ex7) [1,2, 'X', 'Y', 'Z', 4, 5] 만들기
  // - 방법1) 3부터 모두 지우고 'X', 'Y', 'Z', 4, 5 추가
  tmp = arr.splice(2, Infinity, "X", "Y", "Z", 4, 5);
  console.log(arr);

  arr.splice(2, Infinity, ...tmp);
  console.log(arr);

  // - 방법2) 3만 지우고 'X', 'Y', 'Z' 추가
  tmp = arr.splice(2, 1, "X", "Y", "Z");
  console.log(arr);

  arr.splice(2, 3, ...tmp);
  console.log(arr);

  // ex8) 위 7번 문제를 splice를 사용하지 말고 작성하기
  tmp = [...arr.slice(0, 2), "X", "Y", "Z", ...arr.slice(3)];
  console.log(tmp);
}

// ex26();

function ex27() {
  const push = (arr, ...args) => {
    return [...arr, ...args];
  };
  const pop = (arr, cnt = 1) => {
    const tmp = arr.slice(arr.length - cnt);
    return cnt === 1 ? tmp[0] : tmp;
  };
  const unshift = (arr, ...args) => {
    return [...args, ...arr];
  };
  const shift = (arr, cnt = 1) => {
    const tmp = arr.slice(0, cnt);
    return cnt === 1 ? tmp[0] : tmp;
  };

  const arr = [1, 2, 3, 4];

  assert.deepStrictEqual(push(arr, 5, 6), [1, 2, 3, 4, 5, 6]);
  assert.deepStrictEqual(pop(arr), 4);
  assert.deepStrictEqual(pop(arr, 2), [3, 4]);
  assert.deepStrictEqual(unshift(arr, 0), [0, 1, 2, 3, 4]);
  assert.deepStrictEqual(unshift(arr, 7, 8), [7, 8, 1, 2, 3, 4]);
  assert.deepStrictEqual(shift(arr), 1);
  assert.deepStrictEqual(shift(arr, 2), [1, 2]);
  assert.deepStrictEqual(arr, [1, 2, 3, 4]);
}

// ex27();

function ex28() {
  const arr = [1, 2, 3, 4];

  const deleteArray = (arr, start, end = Infinity) => {
    if (typeof start === "number")
      return [...arr.slice(0, start), ...arr.slice(end)];
    return arr.filter((user) => user[start] !== end);
  };

  // assert.deepStrictEqual(deleteArray(arr, 2), [1, 2]);
  // assert.deepStrictEqual(deleteArray(arr, 1, 3), [1, 4]);
  // assert.deepStrictEqual(arr, [1, 2, 3, 4]);

  const Hong = { id: 1, name: "Hong" };
  const Kim = { id: 2, name: "Kim" };
  const Lee = { id: 3, name: "Lee" };
  const users = [Hong, Kim, Lee];

  assert.deepStrictEqual(deleteArray(users, 2), [Hong, Kim]);
  assert.deepStrictEqual(deleteArray(users, 1, 2), [Hong, Lee]);
  assert.deepStrictEqual(deleteArray(users, "id", 2), [Hong, Lee]);
  assert.deepStrictEqual(deleteArray(users, "name", "Lee"), [Hong, Kim]);
}

// ex28();

function ex29() {
  const hong = { id: 1, name: "Hong" };
  const choi = { id: 5, name: "Choi" };
  const kim = { id: 2, name: "kim" };
  const lee = { id: 3, name: "Lee" };
  const park = { id: 4, name: "Park" };

  const users = [kim, lee, park];

  users.addUser = function (user) {
    return [...this, user];
  };
  users.removeUser = function (user) {
    return this.filter((u) => u !== user);
  };
  users.changeUser = function (oldUser, newUser) {
    return this.map((user) => (user === oldUser ? newUser : user));
  };

  console.log(users.addUser(hong));
  console.log(users.removeUser(lee));
  console.log(users.changeUser(kim, choi));
}

// ex29();

function ex30() {
  const arr = [1, 2, 3, true];

  // ex1) 배열의 각 원소를 String으로 변환하시오.
  const ret1 = arr.map(String);

  assert.deepStrictEqual(ret1, ["1", "2", "3", "true"]);

  // ex2) 다음과 같이 작동하는 classNames 함수를 작성하시오.
  const classNames = (...args) =>
    args
      .map((a) => a.trim())
      .filter(Boolean)
      .join(" ")
      .replace(/\s{2,}/g, " ");

  const ret2 = classNames(" ", "a b c", "d", "", "e");
  // 주의: ' a b c d e'면 안됨!!
  assert.strictEqual(ret2, "a b c d e");

  assert.strictEqual(classNames("", " a b c ", "d ", "", "e"), "a b c d e");
  assert.strictEqual(classNames("", " a   b   c ", "d ", "", "e"), "a b c d e");
}

// ex30();

function ex31() {
  const reduce = (arr, fn, initValue) => {
    let i = 0;
    let acc = initValue ?? ((i = 1), arr[0]);

    for (; i < arr.length; i += 1) acc = fn(acc, arr[i]);

    return acc;
  };

  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const hong = { id: 1, name: "Hong" };
  const choi = { id: 5, name: "Choi" };
  const kim = { id: 2, name: "kim" };
  const lee = { id: 3, name: "Lee" };
  const park = { id: 4, name: "Park" };
  const users = [kim, lee, park];

  console.log(reduce([1, 2, 3], (a, b) => a + b, 0));
  console.log(reduce([1, 2, 3, 4, 5], (a, b) => a + b));
  console.log(reduce([1, 2, 3, 4, 5], (a, b) => a * b, 1));
  console.log(reduce([2, 2, 2], (a, b) => a * b));
  console.log(reduce([3, 3, 3], (a, b) => a * b, 0));
  console.log(reduce(users, (acc, user) => acc + user.name, ""));
  console.log(reduce(users, (acc, user) => acc + user.name));

  assert.deepStrictEqual(
    reduce(arr, (acc, cur) => acc + cur, 0),
    arr.reduce((acc, cur) => acc + cur, 0)
  );
  assert.deepStrictEqual(
    reduce(users, (acc, user) => acc + user.name),
    users.reduce((acc, user) => acc + user.name)
  );
}

// ex31();

function ex32() {
  const robot = (arr, jobs) =>
    arr.map((a) => jobs.reduce((acc, fn) => fn(acc), a));

  const square = (n) => n ** 2;
  const sqrt = (n) => Math.sqrt(n);
  const cube = (n) => n ** 3;

  const arr = [1, 2, 3, 4, 5];

  const aJobs = [square, sqrt, cube];
  const bJobs = [cube, square];
  assert.deepStrictEqual(robot(arr, aJobs), [1, 8, 27, 64, 125]);
  assert.deepStrictEqual(robot(arr, bJobs), [1, 64, 729, 4096, 15625]);
}

// ex32();
