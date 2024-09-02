const assert = require("assert");

class Collection {
  #arr = [];

  constructor(...args) {
    this.#arr.push(...args);
  }

  get _arr() {
    return this.#arr;
  }

  //   [Symbol.iterator]() {
  //     let idx = 0;
  //     return {
  //       next: () => ({
  //         value: this.#arr[idx++],
  //         done: idx > this.#arr.length,
  //       }),
  //     };
  //   }

  iterator() {
    return this[Symbol.iterator]();
  }

  *[Symbol.iterator]() {
    for (let i = 0; i < this.#arr.length; i++) {
      yield this.#arr[i];
    }
  }

  clear() {
    // this.#arr = []; //memory 새로 할당됨
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
    // if (this.constructor.name == "Stack") return this.#arr.pop();
    if (this instanceof Stack) return this.#arr.pop();
    else if (this instanceof Queue) return this.#arr.shift();
  }

  toArray() {
    return this.#arr;
  }
}

class List extends Collection {
  constructor(...args) {
    super(...args);
    start;
  }

  add([index, value]) {
    node = { val, rest };
    start = start ?? node;

    value = value ?? index;
    // index =
  }
}
