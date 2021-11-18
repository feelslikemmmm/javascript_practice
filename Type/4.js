//symbol은 유일한 속성 이름을 만들 때 사용한다.
const idSymbol = Symbol('id');
const obj = { id: 123 };
obj[idSymbol] = 456;
//심볼을 이용하면 이름 충돌 문제를 해결할 수 있다.
console.log(obj); // {id: 123, [Symbol(id)]: 456}

const arr = [];
console.log(arr[Symbol.iterator]);
