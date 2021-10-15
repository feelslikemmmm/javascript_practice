//전개 연산자를 사용하면 서로 다른 두 배열이나 객체를 쉽게 합칠 수 있다.

const obj1 = { age: 21, name: 'mike' };
const obj2 = { hobby: 'soccer' };
const obj3 = { ...obj1, ...obj2 };
console.log(obj3); // {age: 21, name: 'mike', hobby: 'soccer'}
