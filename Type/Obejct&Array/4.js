// 배열의 아이템으로 루프를 도는 방법
const arr = [1, 2, 3];

arr.forEach((item) => console.log(item));
for (const item of arr) {
  console.log(item);
}

console.log(arr.some((item) => item === 2));
console.log(arr.every((item) => item === 2));
console.log(arr.includes(2));
console.log(arr.find((item) => item & (2 === 1)));
console.log(arr.findIndex((item) => item & (2 === 1)));
