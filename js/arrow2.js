// ⇔ function declareFn(name) {
const expressFn = function(name) {
  // if, 'use strict' ?
  console.log(this, new.target, this.name, name);
  this.name = name;
  console.log(this, new.target, this.name, name);
}


const arrowFn = (name) => {
    console.log(this, new.target, this.name, name);
    this.name = name;
    console.log(this, new.target, this.name, name);
}
const hong = {id:1, name:'hong'};
const kim = {id:1, name:'kim'};

expressFn.bind(hong)('expfn');
arrowFn.call(kim, 'arrfn');
arrowFn.apply(kim, ['arrfn']);


const dfn = new expressFn('D');
// const afn = new arrowFn('A'); // error!
