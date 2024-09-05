export const range = (s, e, step = s > e ? -1 : 1) => {
  if (step === 0 || s === e) return [s];

  if ((s - e) * step > 0) return [];

  if (e === undefined) {
    if (s > 0) {
      e = s;
      s = 1;
    } else if (s < 0) {
      e = -1;
    } else {
      return [0];
    }
  }

  const result = [];
  for (let i = s; s < e ? i <= e : i >= e; i += step) {
    result.push(i);
  }
  return result;
};
