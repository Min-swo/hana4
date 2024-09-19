function ex1() {
  type t = [string, number];

  const isStringNumber = (value: unknown): value is [string, number] => {
    if (Array.isArray(value) && !!value) {
      if (value.length == 2) {
        if (typeof value[0] == "string" && typeof value[1] == "number")
          return true;
      }
    }
    return false;
  };

  const f1 = (value: number | string | boolean | [string, number]) => {
    if (isStringNumber(value)) {
      console.log(value[0].toUpperCase(), value[1].toFixed());
    }
  };

  // const d: [number, number] = [1, 2];
  // console.log(isStringNumber(d));

  f1(1);
  f1("hi");
  f1(true);
  f1(["hi", 2]);
}

// ex1();

function ex1_2() {
  interface Animal {}
  interface Dog extends Animal {
    name: string;
  }
  interface Cat extends Animal {
    punch(): void;
  }
  class A implements Animal {}
  class Retriever implements Dog {
    name = "Godi";
  }
  class Fold implements Cat {
    punch() {
      console.log("NyangNyang");
    }
  }

  function isDog1(a: Animal): a is Dog {
    if ("name" in a) return true;
    return false;
  }

  function isDog(a: Animal): a is Dog {
    return (a as Dog).name !== undefined;
  }

  const a = new A();
  console.log(isDog(a));
  const retriever = new Retriever();
  console.log(isDog(retriever));
  const fold = new Fold();
  console.log(isDog(fold));
}

// ex1_2();

function ex2() {
  const constCart = {
    X: 1,
    Y: 2,
    Z: 3,
  } as const;

  type T3 = 1 | 2 | 3;
  type T4 = (typeof constCart)[keyof typeof constCart];
}

ex2();

function ex3() {
  try {
    throw new Error("some error!!!!"); // 가
    // throw 'some string error!!!';        // 나
    // throw ['some', 'array', 'error']; // 다
  } catch (error) {
    console.log(hasMessageError(error) ? error.message : error); // (라)
  }

  function hasMessageError(error: unknown): error is Error {
    return (
      error instanceof Error ||
      (typeof error === "object" && error !== null && "message" in error)
    );
  }
}
