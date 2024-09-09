Object.defineProperties(Array.prototype, {
  firstObject: {
    get() {
      return this[0];
    },
    set(value) {
      this[0] = value;
    },
  },
  lastObject: {
    get() {
      return this.at(-1);
    },
    set(value) {
      // this.with(-1, value); ==> pure func
      this[-1] = value;
    },
  },
});

Array.prototype.mapBy = function (prop) {
  return this.map((a) => a[prop]);
};

Array.prototype.filterBy = function (prop, value, isIncludes = false) {
  const cb = isIncludes
    ? (a) => a[prop]?.isIncludes(value)
    : (a) => a[prop] === value;
  return this.filter(cb);
};

Array.prototype.rejectBy = function (prop, value, isIncludes = false) {
  const cb = isIncludes
    ? (a) => !a[prop]?.isIncludes(value)
    : (a) => a[prop] !== value;
  return this.filter(cb);
};

Array.prototype.findBy = function (prop, value) {
  return this.find((a) => a[prop] === value);
};

Array.prototype.sortBy = function (prop) {
  console.log("🚀 ~ prop:", prop);
  const [key, direction = "asc"] = prop.split(":");
  const dir = direction.toLowerCase() === "desc" ? -1 : 1;
  console.log("🚀 ~ key:", key);
  console.log("🚀 ~ dir:", dir);

  return this.toSorted((a, b) => (a[key] < b[key] ? -1 : 1));
};

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
