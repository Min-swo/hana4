function ex0() {
  const str = "AbcDeFgHiJKLmnoP";
  const trans = str.replace(/([A-Z]*)([a-z]*)/g, (matched, upper, lower) => {
    return `${upper.toLowerCase()}${lower.toUpperCase()}`;
  });
  console.log("🚀 ~ trans ~ trans:", trans);
}

ex0();

function ex1() {
  const reverseString = (str) => {
    return [...str].reverse().join("");
  };

  const getLocaleNumber = (val) => {
    const tmp = reverseString(val.toString()).replace(/(\d{3})/g, "$1,");
    return reverseString(tmp);
  };

  function fmt(str, val) {
    const locVal = getLocaleNumber(val);
    return `${str[0]}${locVal.padStart(9)}${str[1]}`;
  }

  const total = { price: 45000, vat: 4500 };

  console.log(fmt`주문합계: ${total.price}원`);
  console.log(fmt`세액합계: ${total.vat}원`);
}

ex1();

function ex2() {
  import assert from "assert";

  const isEndJaum = (str) => {
    const val = str.charCodeAt(str.length - 1);
    // ㄱ ~ ㅎ => true
    if ("ㄱ".charCodeAt(0) <= val && val <= "ㅎ".charCodeAt(0)) return true;
    // ㅏ ~ ㅣ => false
    else if ("ㅏ".charCodeAt(0) <= val && val <= "ㅣ".charCodeAt(0))
      return false;
    // Not Hanguel
    else if ("가".charCodeAt(0) > val || val > "힣".charCodeAt(0)) {
      // Number
      if (48 <= val && val <= 57) {
        // 2, 4, 5, 9 => false
        if (val == 50 || val == 52 || val == 53 || val == 57) return false;
        return true;
      }
      // English[A-Z]
      else if (65 <= val && val <= 90) {
        // L M N R => true
        if (val == 76 || val == 77 || val == 78 || val == 82) return true;
        else return false;
      }
      // English[a-z]
      else if (97 <= val && val <= 122) {
        // l m n r => true
        if (val == 108 || val == 109 || val == 110 || val == 114) return true;
        else return false;
      }
    }
    // 가 ~ 힣
    else if ("가".charCodeAt(0) <= val && val <= "힣".charCodeAt(0)) {
      // 모음으로 끝남 => false
      if ((val - "가".charCodeAt(0)) % 28 == 0) return false;
      return true;
    }
    return false;
  };

  const iga = (str) => {
    return isEndJaum(str) ? "이" : "가";
  };

  const eunun = (str) => {
    return isEndJaum(str) ? "은" : "는";
  };

  const eulul = (str) => {
    return isEndJaum(str) ? "을" : "를";
  };

  assert.equal(isEndJaum("아지오"), false);
  assert.equal(isEndJaum("북한강"), true);
  assert.equal(isEndJaum("뷁"), true);
  assert.equal(isEndJaum("강원도"), false);
  assert.equal(isEndJaum("바라당"), true);
  assert.equal(isEndJaum("ㅜㅜ"), false);
  assert.equal(isEndJaum("케잌"), true);
  assert.equal(isEndJaum("점수 A"), false);
  assert.equal(isEndJaum("알파벳L"), true);
  assert.equal(isEndJaum("24"), false);
  assert.equal(isEndJaum("23"), true);

  assert.strictEqual(`고성군${iga("고성군")}`, "고성군이");
  assert.strictEqual(`고성군${eunun("고성군")}`, "고성군은");
  assert.strictEqual(`고성군${eulul("고성군")}`, "고성군을");
  assert.strictEqual(`성동구${iga("성동구")}`, "성동구가");
  assert.strictEqual(`성동구${eunun("성동구")}`, "성동구는");
  assert.strictEqual(`성동구${eulul("성동구")}`, "성동구를");
}

ex2();

function ex3() {
  import assert from "assert";

  const ㄱ = "ㄱ".charCodeAt();
  const 초성 = [
    "ㄱ",
    "ㄲ",
    "ㄴ",
    "ㄷ",
    "ㄸ",
    "ㄹ",
    "ㅁ",
    "ㅂ",
    "ㅃ",
    "ㅅ",
    "ㅆ",
    "ㅇ",
    "ㅈ",
    "ㅉ",
    "ㅊ",
    "ㅋ",
    "ㅌ",
    "ㅍ",
    "ㅎ",
  ].map((a) => a.charCodeAt() - "ㄱ".charCodeAt());

  const s = [
    "강원도 고성군",
    "고성군 토성면",
    "토성면 북면",
    "북면",
    "김1수",
    "ㄱㅇㄷ",
  ];

  const getInitialArr = (arr) => {
    const initialArr = [];
    arr.map((a) => {
      const tmp = [];
      for (let i = 0; i < a.length; i++) {
        const idx = parseInt((a.charCodeAt(i) - 44032) / 588);
        if (idx < 0 || idx > 17) tmp.push(a[i]);
        else tmp.push(String.fromCharCode(ㄱ + 초성[idx]));
      }
      // console.log("🚀 ~ arr.map ~ tmp:", tmp);
      initialArr.push(tmp.join(""));
    });
    return initialArr;
  };

  const searchByKoreanInitialSound = (arr, initialVal) => {
    const ret = [];
    const initialArr = getInitialArr(arr);
    for (let i = 0; i < initialArr.length; i++) {
      const regex = new RegExp(`${initialVal}`, "g");
      if (regex.test(initialArr[i])) {
        ret.push(arr[i]);
      }
    }
    return ret;
  };

  searchByKoreanInitialSound(s, "ㄱ");
  console.log("🚀 ~ ex3 ~ ", searchByKoreanInitialSound(s, "ㄱ"));
  assert.deepStrictEqual(searchByKoreanInitialSound(s, "ㄱㅇ"), [
    "강원도 고성군",
    "ㄱㅇㄷ",
  ]);
  assert.deepStrictEqual(searchByKoreanInitialSound(s, "ㄱㅅㄱ"), [
    "강원도 고성군",
    "고성군 토성면",
  ]);
  assert.deepStrictEqual(searchByKoreanInitialSound(s, "ㅌㅅㅁ"), [
    "고성군 토성면",
    "토성면 북면",
  ]);
  assert.deepStrictEqual(searchByKoreanInitialSound(s, "ㅂㅁ"), [
    "토성면 북면",
    "북면",
  ]);
  assert.deepStrictEqual(searchByKoreanInitialSound(s, "ㅍㅁ"), []);
  assert.deepStrictEqual(searchByKoreanInitialSound(s, "ㄱ1ㅅ"), ["김1수"]);
}

ex3();

function ex3_2() {
  import assert from "assert";

  const ㄱ = "ㄱ".charCodeAt();
  const ㅎ = "ㅎ".charCodeAt();
  const 가 = "가".charCodeAt();
  const 깋 = "깋".charCodeAt();
  const 초성 = [
    "ㄱ",
    "ㄲ",
    "ㄴ",
    "ㄷ",
    "ㄸ",
    "ㄹ",
    "ㅁ",
    "ㅂ",
    "ㅃ",
    "ㅅ",
    "ㅆ",
    "ㅇ",
    "ㅈ",
    "ㅉ",
    "ㅊ",
    "ㅋ",
    "ㅌ",
    "ㅍ",
    "ㅎ",
  ].map((a) => a.charCodeAt() - ㄱ);
  const 초성객체 = {
    ㄱ: 0,
    ㄲ: 1,
    ㄴ: 2,
    ㄷ: 3,
    ㄸ: 4,
    ㄹ: 5,
    ㅁ: 6,
    ㅂ: 7,
    ㅃ: 8,
    ㅅ: 9,
    ㅆ: 10,
    ㅇ: 11,
    ㅈ: 12,
    ㅉ: 13,
    ㅊ: 14,
    ㅋ: 15,
    ㅌ: 16,
    ㅍ: 17,
    ㅎ: 18,
  };
  const s = [
    "강원도 고성군",
    "고성군 토성면",
    "토성면 북면",
    "북면",
    "김1수",
    "ㄱㅇㄷ",
  ];

  const getRegExpr = (initialVal) => {
    const pattern = [];

    for (let i = 0; i < initialVal.length; i++) {
      if (Object.keys(초성객체).includes(initialVal[i])) {
        const startVal = 초성객체[initialVal[i]] * 588 + 가;
        const endVal = 초성객체[initialVal[i]] * 588 + 깋;
        pattern.push("[");
        pattern.push(String.fromCharCode(startVal));
        pattern.push("-");
        pattern.push(String.fromCharCode(endVal));
        pattern.push(initialVal[i]);
        pattern.push("]");
      } else {
        pattern.push(initialVal[i]);
      }
    }

    console.log(pattern.join(""));
    return pattern.join("");
  };

  const searchByKoreanInitialSound = (arr, initialVal) => {
    const pattern = getRegExpr(initialVal);
    console.log("🚀 ~ searchByKoreanInitialSound ~ pattern:", pattern);

    const regExp = new RegExp(`${pattern}`);
    const ret = arr.filter((a) => regExp.test(a));
    return ret;
  };

  // searchByKoreanInitialSound(s, "ㄴ");
  // console.log("🚀 ~ ex3 ~ ", searchByKoreanInitialSound(s, "ㄱ"));

  assert.deepStrictEqual(searchByKoreanInitialSound(s, "ㄱㅇ"), [
    "강원도 고성군",
    "ㄱㅇㄷ",
  ]);
  assert.deepStrictEqual(searchByKoreanInitialSound(s, "ㄱㅅㄱ"), [
    "강원도 고성군",
    "고성군 토성면",
  ]);
  assert.deepStrictEqual(searchByKoreanInitialSound(s, "ㅌㅅㅁ"), [
    "고성군 토성면",
    "토성면 북면",
  ]);
  assert.deepStrictEqual(searchByKoreanInitialSound(s, "ㅂㅁ"), [
    "토성면 북면",
    "북면",
  ]);
  assert.deepStrictEqual(searchByKoreanInitialSound(s, "ㅍㅁ"), []);
  assert.deepStrictEqual(searchByKoreanInitialSound(s, "ㄱ1ㅅ"), ["김1수"]);
}

ex3_2();

// // 한글 모든 모음 출력 (21개)
// for (let i = 12623; i <= 12643; i++) console.log(String.fromCharCode(i));

// 한글 모든 자음 출력 (30개)
// for (let i = 12593; i <= 12622; i++) console.log(String.fromCharCode(i));

// console.log("ㄱ", "ㄱ".charCodeAt(0));
// console.log("ㄲ", "ㄲ".charCodeAt(0));
// console.log("ㄴ", "ㄴ".charCodeAt(0));
// console.log("가", "가".charCodeAt(0));
// console.log("까", "까".charCodeAt(0));
// console.log("나", "나".charCodeAt(0));
// console.log("가 - ㄱ", "가".charCodeAt(0) - "ㄱ".charCodeAt(0));
// console.log("까 - ㄲ", "까".charCodeAt(0) - "ㄲ".charCodeAt(0) - 28 * 21);
// console.log("나 - ㄴ", "나".charCodeAt(0) - "ㄴ".charCodeAt(0) - 28 * 21);

// for (let i = "가".charCodeAt(0); i <= "깋".charCodeAt(0); i++) {
//   console.log(i, String.fromCharCode(i));
//   if (i == 28 * 21) console.log();
// }
// console.log("가".charCodeAt(0) + 1);
// console.log(21 * 28);
// console.log("ㄱ".charCodeAt(0));
// console.log("낗".charCodeAt(0) - "까".charCodeAt(0) + 1);
// console.log(21 * 28);

// console.log("가", "가".charCodeAt(0) - 44032);

// console.log("깋", "깋".charCodeAt(0) - 44032);
// console.log("까", "까".charCodeAt(0));
// console.log("낗", "낗".charCodeAt(0));
// console.log("나", "닣".charCodeAt(0));

// 해당 자음에 588개가 있음 => 가 ~ 깋
// const tmp = "ㄱ".charCodeAt(0) + parseInt(("나".charCodeAt(0) - 44032) / 588);
// console.log("🚀 ~ tmp:", tmp);
// console.log("🚀 ~ tmpToString:", String.fromCharCode(tmp));

// console.log(("하".charCodeAt(0) - 44032) / 588);
// ㄱ ㄲ ㄴ ㄷ ㄸ ㄹ ㅁ ㅂ ㅃ ㅅ ㅆ ㅇ ㅈ ㅉ ㅊ ㅋ ㅌ ㅍ ㅎ
// 18개!
