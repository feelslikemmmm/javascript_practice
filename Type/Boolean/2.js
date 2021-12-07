// 논리 연산에는 숫자나 문자열을 사용할 수 있다
// 숫자에서는 0이나 NaN이 false 이다.
// 문자열에서는 빈 문자열에서만 false 이다.
const c1 = 123;
const c2 = 'abc';

if (c1 && c2) {
  console.log('c1 && c2');
}

if (c1 || c2) {
  console.log('c1 || c2');
}

if (c1 && c2 && 0) {
  console.log('c1 && c2 && 0');
}

if (c1 && c2 && NaN) {
  console.log('c1 && c2 && NaN');
}

if (c1 && c2 && '') {
  console.log(`c1 && c2 && ''`);
}
