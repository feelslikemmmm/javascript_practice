//객체 비구조화에서는 원래 속성 이름과 다른 이름으로 변수를 생성할 수 있다.
// 콜론을 입력하고 원하는 이름을 입력하면 된다. 이는 중복된 변수명을 피하거나 사용할 당시에 어울리는 구체적인 변수명으로 만들 때 좋다.
const obj = { age: 21, name: 'mike' };
const { age: theAge, name } = obj;
console.log(theAge);
console.log(age); // Error
