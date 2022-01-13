//resolve 예외처리 패턴
Promise.resolve().then(
  () => {
    throw new Error('some error');
  },
  (error) => {
    console.log(error);
  }
);

Promise.resolve()
  .then(() => {
    throw new Error('some error');
  })
  .catch((error) => {
    console.log(error);
  });
