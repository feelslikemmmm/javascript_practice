//비구조화 문법은 중첩되어 있는 경우에도 사용할 수 있다.
const obj = { name: 'kim', mother: { name: 'sara' } };
const {
  name,
  mother: { name: motherName },
} = obj;
console.log({ name, motherName }); // { name: 'kim', motherName: 'sara' };
console.log(mother); // mother는 별칭으로 사용되지 않기 때문에 Error가 발생한다.
