//논리 연산자의 결과값은 마지막으로 평가된 값이 된다.

const c1 = 123;
const c2 = 'abc';
const v1 = c1 && c2;
const v2 = c1 && c2 && 0;
const v3 = c1 && 0 && c2;
console.log({ v1, v2, v3 }); // { v1: 'abc', v2: 0, v3: 0 }

const v4 = c1 || c2;
const v5 = '' || c2;
console.log({ v4, v5 }); // { v4: 123, v5: 'abc' }

const v6 = !!(c1 && 0 && c2);
const v7 = !!(c1 || c2);
console.log({ v6, v7 }); // { v6: false, v7: true }
