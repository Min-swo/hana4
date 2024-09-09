import assert from "assert";

const arr = [1, 2, 3, true];
// const ret1 = arr.map((a) => String(a));
const ret1 = arr.map(String);
assert.deepStrictEqual(ret1, ["1", "2", "3", "true"]);

// const classNames = (...args) => {
//   return args.reduce((acc, s) => {
//     if (acc.length == 0) return acc + s;
//     else {
//       return s.length == 0 ? acc : acc + " " + s;
//     }
//   });
// };

// const classNames = (...args) =>
//   args.reduce((acc, a) => `${acc}${acc && a ? " " : ""}${a ? a : ""}`, "");

// ** join을 사용하면 배열 사이 이어주기 가능!
// 빈 요소들을 제거 해주기 ==> filter를 통해서!
// const classNames = (...args) => args.filter((a) => !!a).join(" ");

// const classNames = (...args) => args.filter(Boolean).join(" ");

const classNames = (...args) =>
  args
    .map((a) => a.trim())
    .filter(Boolean)
    .join(" ")
    .replace(/\s{2,}/g, " ");

const ret2 = classNames("", "a    b c ", "d", "", "e"); // cf. clsx
assert.strictEqual(ret2, "a b c d e");
