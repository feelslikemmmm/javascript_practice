function makeObject1(key, value) {
  const obj = {};
  obj[key] = value;
  return obj;
}

function makeObject2(key, value) {
  return { [key]: value };
}

//계산된 속성명 computed property names
//객체의 속성명을 동적으로 결정하기 위해서 나온 문법
