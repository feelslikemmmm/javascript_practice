//Promise.race는 여러개의 프로미스 중에서 가장 빨리 settled 상태가 된 프로미스를 반환하는 함수이다.
//Promise.race 함수에 입력 된 여러 프로미스 객체 중에서 하나라도 settled 상태가 되면 Promise.race 함수는 그 프로미스와 같은 데이터와 상태를 가진
//프로미스 객체를 반환한다.
//new Promise((_, reject) => setTimeout(reject, 3000)), 는 3초후에 rejected 상태가 되는 프로미스 객체인데
//requestData()함수가 3초안에 끝나지 않는다면 race함수가 반환하는 프로미스 객체는 rejected 상태가 된다.
//반대로 requestData()함수가 3초안에 처리된다면 fullfilled 상태인 프로미스 객체가 반환된다.
function requestData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(10);
    }, 1000);
  });
}

Promise.race([
  requestData(),
  new Promise((_, reject) => setTimeout(reject, 3000)),
])
  .then((data) => console.log('fulfilled', data))
  .catch((error) => console.log('rejected'));
