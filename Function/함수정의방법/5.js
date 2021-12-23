// ES6에서 나온 rest parameter가 추가 되기 전 사용한 arguments 키워드
function printLog(a) {
  const rest = Array.from(arguments).splice(1);
  console.log({ a, rest });
}

printLog(1, 2, 3);
