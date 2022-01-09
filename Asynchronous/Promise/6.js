// Promise객체에는 catch 라는 메서드가 있다
//rejected 상태인 Promise 객체를 처리하기 위해 사용한다
// catch 메서드는 then을 사용해서 2번째 함수를 사용하는 것과 같다.
Promise.reject(1).then(null, (error) => {
  console.log(error);
});

Promise.reject(1).catch((error) => {
  console.log(error);
});
