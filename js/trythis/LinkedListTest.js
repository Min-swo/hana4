import assert from "assert";
import { ArrayList } from "./LinkedListExam.js";

const arrayList = new ArrayList(1, 2, 3);
assert.deepStrictEqual(arrayList.toArray(), [1, 2, 3]);

arrayList.add(4);
assert.deepStrictEqual(arrayList.toArray(), [1, 2, 3, 4]);

arrayList.add(6, 1);
assert.deepStrictEqual(arrayList.toArray(), [1, 6, 2, 3, 4]);

assert.deepStrictEqual(arrayList.get(1), 6);

arrayList.remove(4);
assert.deepStrictEqual(arrayList.toArray(), [1, 6, 2, 3]);

arrayList.removeByIndex(0);
assert.deepStrictEqual(arrayList.toArray(), [6, 2, 3]);

arrayList.add(1, 0);
assert.deepStrictEqual(arrayList.toArray(), [1, 6, 2, 3]);

arrayList.set(1, 300);
assert.deepStrictEqual(arrayList.toArray(), [1, 300, 2, 3]);

assert.deepStrictEqual(arrayList.contains(300), true);
assert.deepStrictEqual(arrayList.contains(0), false);

assert.deepStrictEqual(arrayList.indexOf(300), 1);

assert.deepStrictEqual(arrayList.size(), 4);

const iter = arrayList.iterator();
assert.deepStrictEqual(iter.next(), { value: 1, done: false });
assert.deepStrictEqual(iter.next(), { value: 300, done: false });
assert.deepStrictEqual(iter.next(), { value: 2, done: false });
assert.deepStrictEqual(iter.next(), { value: 3, done: false });
assert.deepStrictEqual(iter.next(), { value: undefined, done: true });
assert.deepStrictEqual(iter.next(), { value: undefined, done: true });

assert.deepStrictEqual(arrayList.isEmpty(), false);

arrayList.clear();
assert.deepStrictEqual(arrayList.isEmpty(), true);
assert.deepStrictEqual(arrayList.size(), 0);

arrayList.add(1).add(4).add(3).add(2);
assert.deepStrictEqual(arrayList.toArray(), [1, 4, 3, 2]);
arrayList.print();
assert.deepStrictEqual(
  arrayList.toString(),
  `ArrayList(4) {"value":1,"rest":{"value":4,"rest":{"value":3,"rest":{"value":2}}}}`
);
