//...을 사용하면 왼쪽에 쉼표 개수만큼을 제외하고 나머지 모두를 새로운 배열로 만들 수 있다.
const arr = [1, 2, 3];
const [first, ...rest1] = arr;
console.log(rest1); // [ 2, 3 ]
const [a, b, c, ...rest2] = arr;
console.log(rest2); // []
