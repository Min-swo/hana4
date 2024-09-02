window.addEventListener("load", (event) => {
  document.getElementById("button").addEventListener("click", (event) => {
    console.log(event.currentTarget); // (가)
  });

  for (let i = 0; i < 5; i += 1) {
    // ⇒ ⇒ ⇒
    setTimeout(console.log, 100, i);
    // (나) boundArguments
    // ⇐⇒ setTimeout((i) => console.log(i), 100);
  }

  console.log("The End"); // (다)
});
// cf. 콜백 함수를 화살표 함수로 사용하면 this가 외부(전역/상위) 객체를 가리킨다.
