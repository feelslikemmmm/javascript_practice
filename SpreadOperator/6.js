//전개 연산자는 배열이나 객체를 복사할 때도 유용하다

const arr1 = [1, 2, 3];
const obj1 = { age: 23, name: 'mike' };
const arr2 = [...arr1];
const obj2 = { ...obj1 };
//원래의 객체나 배열을 복사해서 새로운 객체와 배열을 만들었기 때문에 기존의 배열과 객체는 영향이 없다.
arr2.push(4);
obj2.age = 80;
