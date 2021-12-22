// 나머지 매개변수를 정의하는 방법 rest parameter
// 아래 예시에서는 첫번째 매개변수를 제외한 나머지 매개변수가 rest에 담긴다.
function printLog(a, ...rest) {
  console.log({ a, rest });
}

printLog(1, 2, 3);
