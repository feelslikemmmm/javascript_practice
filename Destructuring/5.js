//배열 비구조화에서 일부 속성값을 무시하고 싶으면 건너뛰고 싶은 개수만큼 쉼표를 입력하면 된다.

const arr = [1, 2, 3];
const [a, , c] = arr;
console.log({ a, c }); // { a: 1, c: 3}