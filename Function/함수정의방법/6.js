// 명명된 매개변수 named parameter
//네임드 파라미터를 사용하면 함수 호출시에 매개변수의 이름과 값을 동시에 적을 수 있어서 가독성이 좋다.
function getValues1(numbers, greaterThan, lessThan) {
  return numbers.filter((item) => greaterThan < item && item < lessThan);
}

//함수를 정의할때 중괄호를 입력해야 한다.
function getValues2({ numbers, greaterThan, lessThan }) {
  return numbers.filter((item) => greaterThan < item && item < lessThan);
}

const numbers = [10, 20, 30, 40];
const result1 = getValues1(numbers, 5, 25);
//명명 된 매개변수
const result2 = getValues2({ numbers, greaterThan: 5, lessThan: 25 });
