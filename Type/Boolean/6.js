// 기본 값을 입력하는 문법
// nullish coalescing

const person = {};

const name = person.name ?? 'unknown';

const name =
  person.name === undefined || person.name === null ? 'unknown' : person.name;
