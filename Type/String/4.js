// 문자열에 있는 캐릭터를 추출하는방법
const s1 = 'abcd';
const c1 = s1[1];
console.log(c1); // b

// 자바스크립트 string => 불변(immutable)
const s2 = 'abcd';
s2[1] = 'z';
console.log(s2); // abcd

//replace는 문자열의 부분을 수정할 수 있다. 새로운 문자열을 만드는 것임(문자열은 불변이기 때문에 수정 불가능)
const input = 'This is my car. The car is mine';
const output = input.replace('car', 'bike');
console.log({ input, output });
console.log(input.replace(/car/g, 'bike'));
// replaceAll: 비교적 최근에 추가 됨
console.log(input.replaceAll('car', 'bike'));
