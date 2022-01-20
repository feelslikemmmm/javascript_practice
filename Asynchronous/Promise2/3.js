// 여러 promise를 병렬로 처리하고 싶은 경우에 사용하는 Promise.all
//매개 변수로 배열을 입력하고 원하는 개수만큼 Promise 객체를 입력한다.
//Promise.all 함수는 Promise 객체를 반환한다 그래서 then 메서드를 사용할 수 있다.
//Promise.all 함수가 반환하는 Promise 객체는 입력된 모든 Promise 객체가 fulfilled 상태가 되어야 마찬가지로 fulfilled 상태가 된다.
//만약 하나라도 rejected 상태가 된다면 Promise.all 함수가 반환하는 Promise 객체도 rejected 상태가 된다.
Promise.all([requestData1(), requestData2()]).then(([data1, data2]) => {
  console.log(data1, data2);
});
