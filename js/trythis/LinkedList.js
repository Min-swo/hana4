const assert = require("assert");

class Collection {
  #arr = [];

  constructor(...args) {
    this.#arr.push(...args);
  }

  get _arr() {
    return this.#arr;
  }

  iterator() {
    return this[Symbol.iterator]();
  }

  *[Symbol.iterator]() {
    for (let i = 0; i < this.#arr.length; i++) {
      yield this.#arr[i];
    }
  }

  clear() {
    this.#arr.length = 0;
  }

  print() {
    console.log(`<${this.constructor.name}: [${this.toArray()}]>`);
  }

  remove() {
    if (this instanceof Stack) this.#arr.pop();
    else if (this instanceof Queue) this.#arr.shift();
  }

  isEmpty() {
    return !this.#arr.length;
  }

  peek() {
    if (this instanceof Stack) return this.#arr.at(-1);
    else if (this instanceof Queue) return this.#arr[0];
  }

  poll() {
    if (this instanceof Stack) return this.#arr.pop();
    else if (this instanceof Queue) return this.#arr.shift();
  }

  toArray() {
    return this.#arr;
  }
}

class ArrayList extends Collection {
  start = {};
  constructor(...args) {
    super(...args);
    this.start = {
      value: undefined,
      rest: undefined,
    };
    args.forEach(this.add);
  }

  add(index, value) {
    value ?? ([index, value] = [value, index]);

    const node = {
      value: value,
      rest: undefined,
    };

    this._arr.push(value);
    let cur = this.start;
    if (index == undefined) {
      while (cur.rest != undefined) {
        cur = cur.rest;
      }
      cur.rest = node;
    } else {
      // ToDo: index가 범위 밖을 때
      for (let i = 0; i < index; i++) {
        cur = cur.rest;
      }
      [cur.rest, node.rest] = [node, cur.rest];
    }
  }

  get(index) {
    let cur = this.start;
    for (let i = 0; i <= index; i++) {
      cur = cur.rest;
    }
    return cur.value;
  }

  remove(value) {
    let cur = this.start;
    while (true) {
      cur = cur.rest;
      if (cur.rest.value == value) break;
    }
    const tmp = cur.rest;
    cur.rest = tmp.rest;
    // Todo: delete tmp!
  }
}

const alist = new ArrayList();
alist.add(3);
console.log("🚀 ~ alist:", alist.start);
alist.add(4);
console.log("🚀 ~ alist:", alist.start);
alist.add(1, 6);
console.log("🚀 ~ alist:", alist.start);
alist.add(0, 7);
console.log("🚀 ~ alist:", alist.start);
