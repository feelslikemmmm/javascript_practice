//비구조화 문법을 사용하면 두 변수의 값을 쉽게 교환할 수 있다.
//보통 두 변수의 값을 교환하려면 제 3의 변수가 필요한데 비구조화 문법을 사용하면 간단하게 해결할 수 있다.
let a = 1;
let b = 2;
[a, b] = [b, a];
console.log({ a, b }); // { a: 2, b : 1};
