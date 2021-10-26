//객체 비구조화에서도 기본값을 정의할 수 있다.
//원래 값이 undefined 인 경우에만 기본값이 할당이 된다.
const obj = { age: undefined, name: null, grade: 'A' };
const { age = 0, name = 'noName', grade = 'F' } = obj;
console.log({ age, name, grade }); // {age: 0, name: null, grade: 'A'}
