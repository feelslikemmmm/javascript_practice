// 화살표함수와 일반 함수가 다른 이유 this 와 arguments가 바인딩 되지 않는다는 점이다.
// 화살표 함수에서 arguments가 필요하다면 rest parameter를 사용하면 된다.
const printLog = (...rest) => console.log(rest);
printLog(1, 2); // [1,2]
