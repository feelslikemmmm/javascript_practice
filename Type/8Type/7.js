//new 키워드를 사용하면 object로 만들어진다.
console.log(typeof new Boolean(true)); //object
console.log(typeof new Number(1)); //object
console.log(typeof new String('abc')); //object

const s1 = new String('abc');
s1.id = 123;
console.log('value:', s1.valueOf());
console.log('id:', s1.id);
