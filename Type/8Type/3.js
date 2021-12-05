//null을 구분하기 위해서는 object의 toString이라는 함수를 이용하면 된다.
console.log(Object.prototype.toString.call(null)); // [object Null]

console.log(typeof []); // object
console.log(Object.prototype.toString.call([])); // [obejct Array]
