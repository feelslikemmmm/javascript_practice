//then 메서드의 중요한 특징은 연결 된 순서대로 호출된다는 점이다
// 이 특징은 promise로 비동기 프로그래밍을 할때 동기적으로 코드를 작성할 수 있게 해준다는 점이다.
Promise.reject('err')
  .then(() => console.log('then 1'))
  .then(() => console.log('then 2'))
  .then(
    () => console.log('then 3'),
    () => console.log('then4')
  )
  .then(
    () => console.log('then 5'),
    () => console.log('then6')
  );
