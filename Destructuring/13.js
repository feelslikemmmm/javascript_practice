//객체 비구조화에서도 ...을 입력하면 사용하지 않은 속성은 제외하고 새로운 객체를 만들 수 있다.
const obj = { age: 21, name: 'kim', grade: 'A' };
const { age, ...rest } = obj;
console.log(rest); // {name: 'kim', grade: 'A'};
