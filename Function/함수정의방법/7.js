//명명된 매개변수에서 기본값을 입력하는 방법
function getValues({ numbers, greaterThan = 0, lessThan = Number.MAX_VALUE }) {
  return numbers.filter((item) => greaterThan < item && item < lessThan);
}

const numbers = [10, 20, 30, 40];
console.log(getValues({ numbers, greaterThan: 5, lessThan: 25 })); // [ 10, 20 ]
console.log(getValues({ numbers, greaterThan: 15 })); // [ 20, 30, 40 ]
console.log(getValues({ lessThan: 25, numbers })); // [ 10, 20 ]
