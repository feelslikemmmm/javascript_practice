//자바스크립트에서 함수가 실행이 될 때 자바스크립트 엔진에서 내부적으로 어떻게 처리가 되는지 보자
// 모든 언어에서는 함수의 실행 정보를 관리하기 위해서 콜스택이라는 것을 관리한다
function f1() {
  const v1 = 123;
  console.log(v1);
}

const v2 = 456;
function f2() {
  f1();
  console.log(v2);
}

f2();
// 함수가 실행 될때마다 현재까지 실행하던 함수의 정보를 콜스택에 저장하고 함수가 실행을 종료하면 콜스택에서 이전에 자미작으로 실행했던 그 함수의 정보를 꺼내온다.
//자바스크립트에서는 이렇게 콜스택에 담기는 함수 실행 정보를 execution context라고 부른다.
//그리고 이 위의 모든 함수를 감싸고 있는 큰 함수가 있다고 생각할 수 있는데 그래서 프로그램이 처음 실행될떄 global execution context라는 것이 생성이 된다
//global execution context가 만들어진 상태에서 위에서부터 실행이 되는데 f2()를 만나면 지금까지 갖고 있던 현재의 execution context를 콜스택에 넣는다
//lexical environment, {변수이름: 값} {v1: 123}
