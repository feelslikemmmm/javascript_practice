// 객체 비구조화에서도 계산된 속성명을 활용할 수 있다.
// 객체 비구조화에서 계산된 속성명을 사용할 때는 반드시 별칭을 활용해야 한다.
const index = 1;
const { [`key${index}`]: valueOfTheIndex } = { key1: 123 };
console.log(valueOfTheIndex); //123
