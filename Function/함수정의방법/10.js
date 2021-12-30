// 화살표 함수에 여러 줄의 코드가 필요하다면 중괄호로 묶어주면 된다
// 이 경우에는 반환값은 리턴 키워드를 사용해야 한다.
const add = (a, b) => {
  if (a <= 0 || b <= 0) {
    throw new Error('must be positibe number');
  }
  return a + b;
};
