// 명명된 매개변수에서의 나머지 매개변수
function f1({ p1, p3, ...rest }) {
  console.log({ p1, p3, rest });
}

f1({ p1: 'a', p2: 'b', p3: 'c', p4: 'd' }); // { p1: 'a', p3: 'c', rest: { p2: 'b', p4: 'd' } }
f1({ p1: 'a', p3: 'b' }); // { p1: 'a', p3: 'b', rest: {} }
