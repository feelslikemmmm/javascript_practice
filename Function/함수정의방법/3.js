//함수 매개변수를 필수값으로 만들 수 있다.
function required() {
  throw new Error('no parameter');
}

function printLog(a = required()) {
  console.log({ a });
}

printLog(10); // {a: 10}
printLog(); // Error
