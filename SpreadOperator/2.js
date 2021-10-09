function makePerson1(age, name) {
  return { age: age, name: name };
}

function makePerson2(age, name) {
  return { age, name };
}

//단축 속성명을 사용하면 makePerson2 처럼 간편하게 작성할 수 있다.
