//함수 매개변수의 기본값을 입력하는 방법
function printLog(a = 1) {
  console.log({ a });
}

printLog(); // 1
printLog(3); // 3
