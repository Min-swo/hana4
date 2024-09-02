// sol1
const dog1 = {
  name: "Maxx",
  showMyName() {
    console.log(`My name is ${this.name}.`);
  },
  whatsYourName() {
    setTimeout(this.showMyName.bind(this), 1000);
  },
};

// sol2
const dog2 = {
  name: "Maxx",
  showMyName() {
    console.log(`My name is ${this.name}.`);
  },
  whatsYourName() {
    const self = this;
    setTimeout(function () {
      self.showMyName();
      // 함수 안에 self로 지정해줘서 고정시키는 용도!
      // 함수 안에 넣어줘야 self를 함수의 this로 고정
      // 이렇게 하던 걸 화살표 함수로 하는 중!
    }, 1000);
  },
};

//sol3
const dog3 = {
  name: "Maxx",
  showMyName() {
    console.log(`My name is ${this.name}.`);
  },
  whatsYourName() {
    // const a = () => this.showMyName();
    // setTimeout(a, 1000);
    // ==> 화살표 함수 자체가 "함수"라는 사실을 기억
    // ==> 화살표 함수를 정의한 시점의
    //     부모(Context)의 this를 상속
    //
    // 화살표 함수를 통해서 this를 상위 함수의 this로
    // 고정! arrow는 정의 시에 상위 scope의 this!
    setTimeout(() => this.showMyName(), 1000);
  },
};

dog1.whatsYourName();
dog2.whatsYourName();
dog3.whatsYourName();
