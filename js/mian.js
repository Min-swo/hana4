function currentCount() {
  let currCount = 0; // private variable
  return {
    connect() {
      currCount += 1;
    },
    disconnect() {
      currCount -= 1;
    },
    getCount() {
      return currCount;
    }, // getter method
    get count() {
      return currCount;
    }, // readonly getter (accessor)
    set count(val) {
      return (currCount = val);
    }, // readonly getter (accessor)
  };
}

const actions = ["입장", "입장", "입장", "퇴장", "입장", "퇴장"]; // Status Queue

const counter = currentCount();
for (const action of actions) {
  action === "입장" ? counter.connect() : counter.disconnect();
  console.log(`${action} -> 현재 입장객:  ${counter.count} 명`);
}
console.log("Current User Count=", counter.count); // counter.getCount()

console.log("Current User Count=", (counter.count = 0)); // counter.getCount()

console.log("Current User Count=", counter.count); // counter.getCount()
