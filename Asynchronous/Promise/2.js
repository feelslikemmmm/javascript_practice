// Promise 객체를 생성하는 대표적인 3가지 방법과 3가지의 상태
const p1 = new Promise((resolve, reject) => {});
const p2 = Promise.reject('error message');
const p3 = Promise.resolve(param);

// 대기중 (pending)
// 성공 (fulfilled)
// 실패 (rejected)

//성공 혹은 실패일 경우를 settled라고 한다.
