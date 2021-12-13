// nullish coalescing과 논리 연산자를 함께 사용할때는 ()를 사용해야 한다.
const name = '';
const title = '';
const text = (name || title) ?? 'foo';
