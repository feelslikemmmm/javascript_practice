//Array를 생성하는 방법
const arr = [1, 2, 3];
const arr2 = new Array(1, 2, 3);
console.log(typeof arr === 'object'); // true
console.log(Object.values(arr)); // [1,2,3]

console.log(arr.map((item) => item + 1)); // [2,3,4]
console.log(arr.filter((item) => item >= 2)); // [2, 3]
console.log(arr.reduce((acc, item) => acc + item, 0)); // 6
