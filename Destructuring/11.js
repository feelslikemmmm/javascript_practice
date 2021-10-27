//속성 값 이름을 변경하면서 동시에 기본값도 정의할 수 있다.
const obj = { age: undefined, name: 'kim' };
const { age: theAge = 0, name } = obj;
