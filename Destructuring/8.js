//배열에서는 순서 정보가 중요했지만 객체 비구조화에서는 순서 정보가 중요하지 않다.
const obj = { age: 21, name: 'mike' };
const { age, name } = obj;
const { name, age } = obj;
const { a, b } = obj; // 존재하지 않는 속성을 사용하면 undefined가 할당된다.
