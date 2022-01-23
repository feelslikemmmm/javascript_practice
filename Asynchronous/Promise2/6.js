// return 키워드 입력하자.
Promise.resolve(10)
  .then((data) => {
    console.log(data);
    //return이 없으면
    Promise.resolve(20);
  })
  .then((data) => {
    console.log(data); // undefined
  });
