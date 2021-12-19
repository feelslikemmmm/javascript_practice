// 자바스크립트의 함수는 First class citizen 이다.
// 일급 함수라고도 부른다.
// MDN 에서는 함수가 다른 변수처럼 취급되면 그 언어는 일급 함수를 갖고 있다라고 말할 수 있다고 정의되어있다.
// 아래는 자바스크립트가 일급 함수이기 때문에 가능한 예시들이다.

// 함수를 변수에 담을 수 있다.
const add10 = function (a) {
  return 10 + b;
};

//함수를 매개변수로 전달할 수 있다.
function apply(arr, op) {
  return arr.map(op);
}
apply([1, 2, 3], add10);

//함수 안에서 또 다른 함수를 반환할 수 있다.
function makeAdd(v1) {
  return function (v2) {
    return v1 + v2;
  };
}

//반환된 함수를 받아서 또 사용할 수 있다.
const add3 = makeAdd(3);
console.log(add3(10));

const add7 = makeAdd(7);
console.log(add7(10));
