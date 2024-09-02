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

class Stack extends Collection {
  constructor(...args) {
    super(...args);
  }

  push(...args) {
    // args.forEach((a) => this.arr.push(a));
    // this.arr = [...this.arr, ...args];
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
    // args.forEach((a) => this.arr.push(a));
    // this.arr = [...this.arr, ...args];
    this._arr.push(...args);
    return this._arr;
  }

  dequeue() {
    return this._arr.shift();
  }
}

const stack = new Stack(1, 2, 3);
const spread = [...stack];
console.log("🚀 ~ spread:", spread);

for (const s of stack) {
  console.log("🚀 ~ s:", s);
}

const itStack = stack.iterator();
console.log(itStack.next());
console.log(itStack.next());
console.log(itStack.next());
console.log(itStack.next());
console.log(itStack.next());

// console.log();
// console.log("🚀 ~ itStack:");
// const itStack2 = new Stack(1, 2, 3);
// console.log("🚀 ~ itStack2:", itStack2);

// for (const s of itStack2) console.log(s);

// const queue = new Queue();
// assert.deepStrictEqual(queue.toArray(), []);
// queue.enqueue(3); // 추가하기
// assert.deepStrictEqual(queue.toArray(), [3]);
// queue.enqueue(2); // 추가하기
// assert.deepStrictEqual(queue.toArray(), [3, 2]);
// assert.strictEqual(queue.dequeue(), 3);
// assert.deepStrictEqual(queue.toArray(), [2]);
// queue.enqueue(5, 6); // 추가하기
// assert.deepStrictEqual(queue.toArray(), [2, 5, 6]);
// queue.print();

// assert.strictEqual(queue.peek(), 2);
// assert.strictEqual(queue.poll(), 2);
// queue.remove();
// assert.deepStrictEqual(queue.toArray(), [6]);

// queue.clear();
// assert.deepStrictEqual(queue.toArray(), []);
// assert.strictEqual(queue.isEmpty(), true);

// const queue2 = new Queue(1, 2);
// assert.deepStrictEqual(queue2.toArray(), [1, 2]);

// const stack = new Stack();
// assert.deepStrictEqual(stack.toArray(), []);
// stack.push(3);
// assert.deepStrictEqual(stack.toArray(), [3]);
// stack.pop();
// assert.deepStrictEqual(stack.toArray(), []);

// const stack2 = new Stack(...[1, 2]);
// assert.deepStrictEqual(stack2.toArray(), [1, 2]);
// stack2.push(3).push(4);
// assert.deepStrictEqual(stack2.toArray(), [1, 2, 3, 4]);
// stack2.pop();
// assert.deepStrictEqual(stack2.toArray(), [1, 2, 3]);

// stack2.push(4, 5);
// assert.deepStrictEqual(stack2.toArray(), [1, 2, 3, 4, 5]);

// stack2.arr = [5, 6, 7];
// assert.notDeepStrictEqual(stack2.toArray(), [5, 6, 7]);

// const queue = new Queue();
// queue.enqueue(3); // 추가하기
// assert.deepStrictEqual(queue.toArray(), [3]);

// queue.enqueue(2); // 추가하기
// assert.deepStrictEqual(queue.toArray(), [3, 2]);

// // 추가한지 가장 오래된 - 먼저 들어간 - 하나 꺼내기
// assert.deepStrictEqual(queue.dequeue(), 3);

// queue.enqueue(5, 6); // 추가하기
// assert.deepStrictEqual(queue.toArray(), [2, 5, 6]);

// assert.deepStrictEqual(queue.toArray(), [2, 5, 6]);

const queue2 = new Queue(2, 3);
assert.deepStrictEqual(queue2.toArray(), [2, 3]);

const stack3 = new Stack(2, 3);
assert.deepStrictEqual(queue2.peek(), 2);
assert.deepStrictEqual(stack3.peek(), 3);

assert.deepStrictEqual(queue2.poll(), 2);
assert.deepStrictEqual(queue2.toArray(), [3]);

assert.deepStrictEqual(stack3.poll(), 3);
assert.deepStrictEqual(stack3.toArray(), [2]);

queue2.enqueue(5, 6);
queue2.remove();
assert.deepStrictEqual(queue2.toArray(), [5, 6]);

stack3.push(5, 6);
stack3.remove();
assert.deepStrictEqual(stack3.toArray(), [2, 5]);

queue2.print();
stack3.print();

queue2.clear();
stack3.clear();
assert.deepStrictEqual(queue2.toArray(), []);
assert.deepStrictEqual(stack3.toArray(), []);

assert.deepStrictEqual(queue2.isEmpty(), true);
assert.deepStrictEqual(stack3.isEmpty(), true);
