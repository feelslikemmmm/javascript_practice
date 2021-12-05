const v1 = Boolean(123);
const v2 = Boolean(0);
console.log(typeof v1, v1); //boolean, true
console.log(typeof v2, v2); //boolean, false

// 문자열의 길이가 0보다 크면 true, 작으면 false
const v3 = Boolean('abc');
const v4 = Boolean('');
console.log(typeof v3, v3); //boolean, true
console.log(typeof v4, v4); //boolean, false

// 느낌표는 Logical Not을 의미한다.
const v11 = !!123;
const v12 = !!0;
const v13 = !!'abc';
const v14 = !!'';

console.log(typeof v11, v11); //boolean, true
console.log(typeof v12, v12); //boolean, false
console.log(typeof v13, v13); //boolean, true
console.log(typeof v14, v14); //boolean, false
