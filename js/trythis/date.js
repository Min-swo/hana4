const { after } = require("node:test");

function ex1() {
  const d1 = new Date("1 / 1 / 97");
  //   console.log("🚀 ~ d1:", d1.toString());
  //   console.log("🚀 ~ d1:", d1.getTime());

  const d2 = new Date("1 / 2 / 97");
  //   console.log("🚀 ~ d2:", d2.toString());
  //   console.log("🚀 ~ d2:", d2.getTime());

  //   console.log("🚀 ~ diff:", (d2 - d1) / 1000);
  return d2 - d1 / 1000;
}
ex1();

function ex2() {
  const rand = (s, e) => s + Math.floor((e - s + 1) * Math.random());

  const d = new Date();
  d.setDate(1);
  d.setMonth(d.getMonth() + 1);
  d.setDate(0);
  const lastDate = d.getDate();
  const randDates = [];
  do {
    const rDate = rand(1, lastDate);
    if (!randDates.includes(rDate)) randDates.push(rDate);
  } while (randDates.length <= 5);

  console.log("🚀 ~ ex2 ~ r1:", randDates);
}
ex2();

function ex3() {
  const td = new Date();

  const WEEKS = "일월화수목금토";
  console.log("🚀 ~ td:", td.toDateString());
  console.log("🚀 ~ td:", WEEKS[td.getDay()]);

  const nd = new Date();
  nd.setFullYear(td.getFullYear() + 1);
  console.log("🚀 ~ nd:", nd.toDateString());
  console.log("🚀 ~ nd:", WEEKS[nd.getDay()]);

  const after100 = new Date();
  after100.setDate(after100.getDate() + 100);
  console.log("🚀 ~ after100:", after100.toLocaleDateString());
  console.log("🚀 ~ after100:", WEEKS[after100.getDay()]);
}
ex3();
