// 문자열의 일부분을 추출하는 방법
const s1 = 'This is my car. The car is mine';
console.log(s1.substring(0, 4)); // this
console.log(s1.substring(5, 2)); // is
console.log(s1.substring(16)); // the car is mine

let pos = s1.indexOf(' ');
console.log(s1.indexOf(0, pos)); // this
pos = s1.lastIndexOf(' ');
console.log(s1.substring(pos + 1)); // mine

console.log(s1.slice(5, 7));
