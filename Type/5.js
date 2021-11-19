// 타입을 변환할 때는 이와 같은 함수를 사용할 수 있다. =>  String, Number, BigInt, Boolean
const v1 = String(123);
const v2 = String(new Date());
console.log(typeof v1, v1); // string 123
console.log(typeof v2, v2); // string Sat Oct 03 2020 00:18:27 GTM+0900 (Korean Standard Time)

const v3 = Number('123');
const v4 = BigInt('123');
console.log(typeof v3, v3); // Number 123
console.log(typeof v4, v4); // bigint 123n
