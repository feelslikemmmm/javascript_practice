// then 메서드의 체이닝
// then 메서드가 항상 프로미스 객체를 반환하기 때문에 가능하다.
function requestData1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(10);
    }, 1000);
  });
}

function requestData2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(20);
    }, 2000);
  });
}

requestData1()
  .then((data) => {
    console.log(data);
    return requestData2();
  })
  .then((data) => {
    console.log(data);
    return data + 1;
  })
  .then((data) => {
    console.log(data);
    throw new Error('some error');
  })
  .then(null, (error) => {
    console.log('error!!!!');
  })
  .then((data) => {
    console.log(data);
  });
