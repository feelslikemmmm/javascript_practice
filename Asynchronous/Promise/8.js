// then 과 마찬가지로 catch도 Promise 객체를 반환한다.
Promise.reject(10)
  .then((data) => {
    console.log('then1:', data);
    return 20;
  })
  .catch((data) => {
    console.log('catch:', data);
    return 30;
  })
  .then((data) => {
    console.log('then2: ', data);
  });
