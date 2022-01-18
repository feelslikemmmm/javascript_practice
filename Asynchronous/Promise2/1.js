// Promise 를 사용할때 then 메서드로 연결하면 순차적으로 실행이 된다
// 각각의 비동기 처리가 병렬로 처리되지 않는다는 단점이 있다.
requerstData1()
  .then((data) => {
    console.log(data);
    return requestData2();
  })
  .then((data) => {
    console.log(data);
  });
