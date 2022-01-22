// 프로미스 객체는 settled 상태가 되면 그 상태를 유지하는 프로미스의 성질을 이용해서 데이터를 캐싱하는 용도로 사용할 수 있다.
let cachedPromise;
function getData() {
  cachedPromise = cachedPromise || requestData();
  return cachedPromise;
}

getData().then((v) => console.log(v));
getData().then((v) => console.log(v));
