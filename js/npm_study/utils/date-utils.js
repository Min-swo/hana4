export const WEEKS = ["일", "월", "화", "수", "목", "금", "토"];
export const SPACES = Array(7).fill(" ");

const printRaw = (arr, btw) => console.log(String.raw({ raw: arr }, ...btw));

const setDateWith = (year, month, date) => {
  const curDate = new Date();
  curDate.setFullYear(year);
  curDate.setMonth(month);
  curDate.setDate(date);
  return curDate;
};

const getLastDate = (year, month, date) => {
  const d = setDateWith(year, month, date);
  d.setMonth(d.getMonth() + 1);
  d.setDate(0);
  return d.getDate();
};

export const callender = (year, month, date) => {
  const curDate = setDateWith(year, month, 1);

  console.log(`${month + 1}월 ${year}`.padStart(13));
  printRaw(WEEKS, SPACES);

  let dayIdx = 0;
  let dateIdx = 1;
  const weekDates = [];
  const lastDate = getLastDate(year, month, date);

  while (dateIdx <= lastDate) {
    if (dayIdx % 7 === curDate.getDay())
      weekDates.push((dateIdx++).toString().padStart(2));
    else weekDates.push(" ".padStart(2));

    dayIdx += 1;
    curDate.setDate(dateIdx);

    if (weekDates.length === 7) {
      printRaw(weekDates, SPACES);
      weekDates.length = 0;
    }
  }
  if (weekDates.length > 0) {
    printRaw(weekDates, SPACES);
    weekDates.length = 0;
  }
};

const d = new Date();
const [year, month, date] = [d.getFullYear(), d.getMonth(), d.getDate()];

callender(year, month, date);
console.log();
callender(year, 9, date);
console.log();
callender(year, 10, date);
console.log();
callender(year, 11, date);
