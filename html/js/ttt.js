import {} from "../../js/npm_study/utils/timer-utils.js";
const weeks = ["일", "월", "화", "수", "목", "금", "토"];

const getNextWeek = () => {
  let widx = -1;
  return () => {
    widx += 1; // side-effect!
    if (widx >= weeks.length) {
      widx = 0;
    }
    return `${weeks[widx]}요일`;
  };
};

const nextWeekFunction = {
  kor: getNextWeek(),
  math: getNextWeek(),
};

const setWeek = (subject) => {
  console.log("set week!");
  document.getElementById(subject).innerText = nextWeekFunction[subject]();
};

const debounce = (cb, delay) => {
  let timer;
  return (...args) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(cb, delay, ...args);
  };
};

const throttle = (cb, delay) => {
  let timer;
  return (...args) => {
    if (timer) return;
    timer = setTimeout(() => {
      cb(...args);
      timer = null;
    }, delay);
  };
};

const dSetWeek = debounce(setWeek, 500);
const tSetWeek = throttle(setWeek, 500);
const dConsole = debounce(console.log, 500);

window.addEventListener("load", () => {
  document.getElementById("btnKor").addEventListener("click", () => {
    event.preventDefault();
    dSetWeek("kor");
  });

  document.getElementById("btnMath").addEventListener("click", () => {
    event.preventDefault();
    tSetWeek("math");
  });

  document.getElementById("search").addEventListener("input", () => {
    event.preventDefault();
    const d = new Date();
    dConsole(`${d.toISOString()} Search>> ${event.target.value}`);
  });
});

// let runCnt = 0;
// const subjects = ["Kor", "Math"];
// const intl = setInterval(() => {
//   runCnt += 1;
//   if (runCnt > 10) clearInterval(intl);
//   document.getElementById(`btn${subjects[runCnt % 2]}`).click();
// }, 500);
