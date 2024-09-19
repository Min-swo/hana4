class Collection {
  #arr = Array();

  constructor(...args) {
    this.#arr.push(...args);
  }

  get _arr() {
    return this.#arr;
  }

  push(...args) {
    this.#arr.push(...args);
    return this.#arr;
  }

  get peek() {
    return this.isQueue() ? this.#arr[0] : this.#arr.at(-1);
  }

  get poll() {
    return this.isQueue() ? this.#arr.shift() : this.#arr.pop();
  }

  remove() {
    return this.poll;
  }

  get length() {
    return this.#arr.length;
  }

  get isEmpty() {
    return !this.#arr.length;
  }

  clear() {
    this.#arr.length = 0;
  }

  iterator() {
    return this[Symbol.iterator]();
  }

  // [1, 2, 3]
  *[Symbol.iterator]() {
    for (let i = this.length - 1; i >= 0; i -= 1) {
      yield this.toArray()[i];
    }
  }

  toArray() {
    return this.#isQueue() ? this.#arr.toReversed() : this.#arr;
  }

  print() {
    console.log(`<${this.constructor.name}: [${this.toArray()}]>`);
  }

  printArr() {
    console.log(`<${this.constructor.name}: [${this.#arr}]>`);
  }

  #isQueue() {
    return this instanceof Queue;
  }
}

class Stack extends Collection {}
class Queue extends Collection {}

// ArrayList 클래스를 작성하세요.
class ArrayList extends Collection {
  start = {};
  constructor(...args) {
    super(...args);
    this.start = {
      value: undefined,
      rest: undefined,
    };
  }

  add(value, index) {
    index = index ?? this.length;
    this._arr.splice(index, 0, value);
    return this;
  }

  get(index) {
    return this._arr[index];
  }

  remove(value) {
    const index = this.indexOf(value);
    this._arr.splice(index, 1);
  }

  removeByIndex(index) {
    this._arr.splice(index, 1);
  }

  set(index, value) {
    this._arr[index] = value;
  }

  contains(value) {
    return this._arr.includes(value);
  }

  indexOf(value) {
    return this._arr.indexOf(value);
  }

  size() {
    return this.length;
  }

  iterator() {
    return this[Symbol.iterator]();
  }

  *[Symbol.iterator]() {
    for (let i = 0; i < this._arr.length; i++) {
      yield this._arr[i];
    }
  }

  toArray() {
    return this._arr;
  }

  isEmpty() {
    return this.length === 0;
  }

  clear() {
    this._arr.length = 0;
  }

  arrayToList() {
    let node;
    for (let i = this.length - 1; i >= 0; i -= 1) {
      node = { value: this._arr[i], rest: node };
    }
    return node;
  }

  print() {
    console.log(JSON.stringify(this.arrayToList(), null));
  }

  toString() {
    return `${this.constructor.name}(${this.length}) ${JSON.stringify(
      this.arrayToList(),
      null
    )}`;
  }
}

export { ArrayList };
