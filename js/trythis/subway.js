const assert = require("assert");

class Subway {
  #LINE2 = [
    "신도림",
    "성수",
    "신설동",
    "용두",
    "신답",
    "용답",
    "시청",
    "충정로",
    "아현",
    "이대",
    "신촌",
    "공항철도",
    "홍대입구",
    "합정",
    "당산",
    "영등포구청",
    "문래",
    "대림",
    "구로디지털단지",
    "신대방",
    "신림",
    "봉천",
    "서울대입구",
    "낙성대",
    "사당",
    "방배",
    "서초",
    "교대",
    "강남",
    "역삼",
    "선릉",
    "삼성",
    "종합운동장",
    "신천",
    "잠실",
    "잠실나루",
    "강변",
    "구의",
    "건대입구",
    "뚝섬",
    "한양대",
    "왕십리",
    "상왕십리",
    "신당",
    "동대문역사문화공원",
    "을지로4가",
    "을지로3가",
    "을지로입구",
  ];

  #start;
  #end;
  #cur;
  #len;

  constructor(start, end) {
    this.#start = this.#LINE2.indexOf(start);
    this.#end = this.#LINE2.indexOf(end);
    this.#cur = this.#LINE2.indexOf(start);
    this.#len = this.#LINE2.length;
    console.log("🚀 ~ Subway ~ constructor ~ #cur:", this.#cur);
    console.log("🚀 ~ Subway ~ constructor ~ #end:", this.#end);
  }

  get length() {
    return this.#LINE2.length;
  }

  findIndex(name) {
    return this.#LINE2.findIndex((l) => l === name);
  }

  nextStation() {
    return this.#LINE2[this.#cur++ % this.#len];
  }

  *[Symbol.iterator]() {
    while (true) {
      if (this.#cur % this.#len == this.#end % this.#len) {
        yield this.nextStation();
        this.#cur = this.#start;
        break;
      }
      yield this.nextStation();
    }
    // for (
    //   let i = startIdx;
    //   i <= (startIdx < endIdx ? endIdx : endIdx + this.length);
    //   i++
    // )
    //   yield this.#LINE2[i % this.length];
  }
}

const routes = new Subway("문래", "신림");
const it1 = routes[Symbol.iterator]();

console.log([...routes]);

assert.deepStrictEqual(
  [...routes],
  ["문래", "대림", "구로디지털단지", "신대방", "신림"]
);

assert.deepStrictEqual([...routes].length, 5);
assert.deepStrictEqual(it1.next(), { value: "문래", done: false });
assert.deepStrictEqual(it1.next(), { value: "대림", done: false });
assert.deepStrictEqual(it1.next(), { value: "구로디지털단지", done: false });
assert.deepStrictEqual(it1.next(), { value: "신대방", done: false });
assert.deepStrictEqual(it1.next(), { value: "신림", done: false });
assert.deepStrictEqual(it1.next(), { value: undefined, done: true });

console.log("=============================================");

// 32개 정거장
const routes2 = new Subway("구로디지털단지", "성수");

// ['구로디지털단지', '신대방', ..., '성수']
console.log([...routes2], [...routes2].length);
assert.deepStrictEqual([...routes2].length, 32);

const it2 = routes2[Symbol.iterator]();
while (true) {
  const x = it2.next();
  console.log(x);
  if (x.done) break;
}
console.log("=============================================");

// 46개 정거장이면 통과!
const routes3 = new Subway("문래", "합정");
console.log([...routes3], [...routes3].length);
assert.deepStrictEqual([...routes3].length, 46);

console.log("=============================================");

// 48개 정거장이면 통과!
const routes4 = new Subway("신도림", "을지로입구");
console.log([...routes4], [...routes4].length);
assert.deepStrictEqual([...routes4].length, 48);
