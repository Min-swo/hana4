const WEEKS = ["일", "월", "화", "수", "목", "금", "토"];
const SPACES = Array(7).fill(" ");

const printRaw = (arr, btw) => console.log(String.raw({ raw: arr }, ...btw));

const setDateWith = (year, month, date) => {
  const curDate = new Date();
  curDate.setFullYear(year);
  curDate.setMonth(month);
  curDate.setDate(date);
  return curDate;
};

const callender = (year, month, date) => {
  const curDate = setDateWith(year, month, 1);

  console.log(`${month + 1}월 ${year}`.padStart(13));
  printRaw(WEEKS, SPACES);

  let dateIdx = 1;
  while (true) {
    if (curDate.getMonth() != month) break;
    const weekDays = [];

    let dayIdx = 0;
    while (true) {
      if (curDate.getMonth() != month || dayIdx >= 7) break;

      if (curDate.getDay() != dayIdx) weekDays.push(" ".padStart(2));
      else weekDays.push((dateIdx++).toString().padStart(2));

      dayIdx += 1;
      curDate.setDate(dateIdx);
    }
    printRaw(weekDays, SPACES);
  }
};

const d = new Date();
const [year, month, date] = [d.getFullYear(), d.getMonth(), d.getDate()];

callender(year, month, date);
console.log();
callender(year, 10, date);
console.log();
callender(year, 11, date);
