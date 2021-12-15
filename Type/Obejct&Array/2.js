// 객체의 속성을 추가하거나 수정하거나 삭제하는 방법
const obj = {
  age: 21,
  name: 'kim',
};
obj.city = 'seoul';
obj.age = 30;
console.log(obj);

delete obj.city;
console.log(obj);

delete obj['name'];
console.log(obj);
