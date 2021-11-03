// 비 구조화에서 별칭을 사용할 때 단순히 변수명만 입력할 수 있는 것은 아니다.
const obj = {};
const arr = [];
({ foo: obj.prop, bar: arr[0] } = { foo: 123, bar: true });
console.log(obj); // {prop: 123}
console.log(arr); // [true]
