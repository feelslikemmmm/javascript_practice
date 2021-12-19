//자바스크립트에는 클로저라는 기능이 있다.
//클로저는 함수와 그 함수를 둘러싸고 있는 주변의 상태를 기억하는 기능이다.

function makeAdd(v1) {
  return function (v2) {
    return v1 + v2;
  };
}

const add3 = makeAdd(3);
console.log(add3(10));
const add7 = makeAdd(7);
console.log(add7(10));
