// 자바스크립트에서는 객체의 속성에 접근할때 .을 찍어서 접근을 한다 그런데  객체가 존재하지 않는다면 런타임에 에러가 발생한다.
const person = null;
const name = person.name; // Error;
