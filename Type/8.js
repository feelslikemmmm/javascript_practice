//자바스크립트에서 두 값이 같은지 비교하는 방법은 두가지가 있다.

//등호를 3개 사용하는 방식과 2개를 사용하는 방식

//등호를 3개 사용하면  두값의 타입과 값이 모두 같은지 검사를 한다.
console.log(123 === 123); // true
console.log('123' === '123'); //true
console.log(123 === '123'); //false
console.log(0 === false); // false
console.log(123 === true); // false

//등호 2개를 사용하면 두값의 타입이 다르면 타입을 변환하면서 까지 비교하려고 한다.

console.log(123 == 123); // true
console.log('123' == '123'); // true
console.log(123 == '123'); // true
console.log(0 == false); // true
console.log(123 == true); // false
