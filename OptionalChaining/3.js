// 이전에 살펴본 옵셔널 체이닝은 아래의 코드와 같다고 생각할 수 있다.
const name = person?.name;
const name = person === null || person === undefined ? undefined : person.name;
