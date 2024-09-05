export { Stack, Queue } from "./collectino.js";

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

class Stack extends Collection {
  constructor(...args) {
    super(...args);
  }

  push(...args) {
    this._arr.push(...args);
    return this._arr;
  }

  pop() {
    return this._arr.pop();
  }
}

class Queue extends Collection {
  constructor(...args) {
    super(...args);
  }

  enqueue(...args) {
    this._arr.push(...args);
    return this._arr;
  }

  dequeue() {
    return this._arr.shift();
  }
}
