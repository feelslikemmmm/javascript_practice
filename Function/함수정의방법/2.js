//함수 매개변수의 기본값에 함수를 호출하는 형태로 입력할 수 있다.
//기본값을 사용하는 경우에만 함수가 호출된다
function getDefault() {
  console.log('called getDefault');
  return 1;
}

function printLog(a = getDefault()) {
  console.log({ a });
}

printLog(); // {a : 1}
printLog(3); // {a : 3}
