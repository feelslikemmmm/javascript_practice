// 문자열을 분할하고 합치는 방법
const s1 = 'This is my car. The car is Mine';
console.log(s1.split(' '));
/**
 * 
[
  'This', 'is',
  'my',   'car.',
  'The',  'car',
  'is',   'Mine'
]

 */

const arr = s1.split('.');
console.log(arr);
console.log(arr.map((item) => item.trim()));

console.log(s1.split(' ').join());
console.log(s1.split(' ').join('..'));
