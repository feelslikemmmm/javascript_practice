// 배열의 아이템이 객체인 경우에 비구조화 문법을 사용하면 for문을 편리하게 사용할 수 있다.

const people = [
  { age: 21, name: 'kim' },
  { age: 30, name: 'park' },
];

for (const { age, name } of people) {
  //...
}
