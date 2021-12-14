// 객체 생성하는 방법
const obj = {
  age: 21,
  name: 'kim',
};
const obj2 = new Object({
  age: 21,
  name: 'kim',
});

console.log(Object.keys(obj)); // 입력된 객체의 모든 키를 배열로 반환해준다.
console.log(Object.values(obj)); // 입력된 객체의 모든 값을 배열로 반환해준다.
console.log(Object.entries(obj)); // 키와 밸류를 튜플 형식으로 만들어서 배열로 반환해준다

for (const [key, value] of Object.entries(obj)) {
  console.log(key, value);
}
