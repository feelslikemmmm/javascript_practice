// AND 연산자에서는 앞에 있는 값이 true가 돼야 뒤에 있는 코드가 평가가 된다.
const c1 = 123;
const c2 = 0;
c1 && console.log('log1');
c2 && console.log('log2');
