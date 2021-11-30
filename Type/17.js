//문자열에 특정 문자열이 있는지 검사하는 방법
const s1 = 'This is my car. The car is mine';
console.log(s1.includes('car'));

console.log(s1.startsWith('This is'));
console.log(s1.startsWith('is'));

console.log(s1.endsWith('mine'));
console.log(s1.endsWith('is'));
