//옵셔널 체이닝은 검사하는 단계가 많을수록 유용하다
const name =
  person &&
  person.friends &&
  person.friends[0] &&
  person.friends[0].mother &&
  person.friends[0].mother.name;

const name2 = person?.friends?.[0]?.mother?.name;
