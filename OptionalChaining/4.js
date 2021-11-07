// 함수를 호출할 때도 옵셔널 체이닝을 사용할 수 있다.
const person = {
  getName: () => 'abc',
};

const name = person.getName?.();
console.log(name);
