//비구조화 문법에서 기본값의 정의는 변수로 한정되지 않는다.
const [{ prop: x } = { prop: 123 }] = [];
console.log(x); // 123
const [{ prop: x } = { prop: 123 }] = [{}];
console.log(x); // undefined
