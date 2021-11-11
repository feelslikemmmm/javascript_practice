// 물음표 두개를 이용해서  기본값을 입력하는 것을 nullish coalescing 이라고 한다.
// 옵셔널 체이닝은 nullish coalescing과 함께 사용하기 좋다.
const person = {};
const name = person?.firends?.[0]?.mother?.name ?? 'default name';
