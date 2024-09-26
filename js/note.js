const tmout1 = setTimeout((name) => console.log(name), 1000, ["hong, kim"]);

const tmout2 = setTimeout(
  (name1, name2) => console.log(name1, name2),
  1000,
  "hong",
  "kim"
);
