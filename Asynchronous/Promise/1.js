// Promise는 비동기 상태를 값으로 다룰 수 있는 객체이다
// Promise를 이용하면 비동기 프로그래밍을 동기 프로그래밍 방식으로 작성할 수 있다.
requestData1()
  .then((data) => {
    console.log(data);
    return requestData2();
  })
  .then((data) => {
    console.log(data);
  });
