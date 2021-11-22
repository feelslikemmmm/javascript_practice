// 문자열로부터 숫자를 파싱하는 방법

console.log(Number.parseInt('123')); // 123
console.log(Number.parseInt('123.456')); // 123
console.log(Number.parseInt('123abc')); // 123

console.log(Number.parseFloat('123')); //123
console.log(Number.parseFloat('123.456')); //123.456
console.log(Number.parseFloat('123abc')); // 123
console.log(Number.parseFloat('123.456.789')); //123.456
