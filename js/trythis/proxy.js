const assert = require("assert");

class Emp {
  firstName;
  lastName;

  constructor() {
    return new Proxy(this, {
      set(target, prop, value) {
        console.log("🚀set ~ :", target, prop, value);
        if (prop == "fullName") {
          const tmp = value?.split(" ");
          target["lastName"] = (tmp[1] || tmp[0]).toUpperCase();
          target["firstName"] = tmp[1] ? tmp[0] : target.firstName;
        } else {
          target[prop] = value;
        }
      },

      get(target, prop) {
        if (prop == "fullName") {
          const { firstName, lastName } = target;
          return `${firstName}${firstName ? " " : ""}${lastName}`;
        }
        return target[prop];
      },
    });
  }
}

const hong = new Emp();
// split하여 firstName, lastName 셋
hong.fullName = "Kildong Hong";
// 'Kildong HONG' 출력하면 통과!
console.log(hong.fullName);
assert.strictEqual(hong.fullName, "Kildong HONG");

hong.fullName = "Lee";
// 'Kildong LEE' 출력하면 통과!
console.log(hong.firstName, hong.lastName);
assert.strictEqual(hong.fullName, "Kildong LEE");
assert.deepStrictEqual(
  [hong.firstName, hong.lastName],
  "Kildong LEE".split(" ")
);
