//옵셔널 체이닝은 배열의 아이템에 접근할 때도 유용하게 사용된다.
const person = { friends: null, mother: null };
// 0번째 인덱스에 접근할 때 괄호를 열기전에 물음표와 .을 입력해서 사용한다.
const firstFriend = person.friends?.[0];
//friends라는 배열이 없기 때문에 undefined가 할당 된다.
//옵셔널 체이닝을 사용하지 않았다면 런타임에 에러가 발생했을것이다.

const prop = 'name';
//배열뿐만 아니라 일반적으로 객체에서 동적으로 속성값 을 입력할때 아래처럼 사용할 수 있다.
const name = person.mother?.[prop];
