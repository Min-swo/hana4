const addTax = function (resolve) {
  return function (price) {
    return resolve(price * 1.1);
  };
};

//        ||

const addTax = (resolve) => {
  return (price) => {
    return resolve(price * 1.1);
  };
};

//        ||

const addTax = (resolve) => (price) => resolve(price * 1.1);
