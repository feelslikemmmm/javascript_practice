const porson = null;
//에러가 발생하지 않기 위해서 앞에서 검사를 해주는 방법도 있다.
const name = person && person.name;
//옵셔널 체이닝을 이용하면 아주 간단하게 해결할 수 있다.
const name2 = person?.name;
