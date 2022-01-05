//Promise 객체의 then 메서드
//비동기 처리가 끝나고 처리할 일을 then 메서드로 정의할 수 있다.
requestData().then(onResolve, onReject);
Promise.resolve(123).then((data) => console.log(data));
Promise.reject('error').then(null, (data) => console.log(data));
