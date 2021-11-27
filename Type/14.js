//여러개의 변수를 조합해서 하나의 문자열을 만드는 방법
const name = 'kim';
const age = 23;
const text1 = 'name:' + name + ', age: ' + age;
const text2 = `name: ${name}, age: ${age}`;
console.log(text1);
console.log(text2);
