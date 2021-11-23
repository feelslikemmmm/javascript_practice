//숫자가 없는 문자열을 파싱하면 NaN이 나온다. Not a Number
const v = Number.parseInt('ABC');
console.log(v);

console.log('v', Number.isNaN(v)); // v true
console.log('123', Number.isNaN(123)); // 123 true
