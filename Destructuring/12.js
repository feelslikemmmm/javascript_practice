//기본값으로 함수의 반환 값을 넣을 수 있다
//기본값이 사용될 때만 함수가 호출 된다.
function getDefaultAge() {
  console.log('hello');
  return 0;
}

const obj = { age: 21, grade: 'A' };
const { age = getDefaultAge(), grade } = obj;
console.log(age); //age가 undefined가 아니기 때문에 함수는 호출이 안된다.
