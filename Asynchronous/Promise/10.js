//서버에서 데이터를 받아오는 경우를 예시로 본 finally
function requestData() {
  return fetch()
    .catch((error) => {
      //...
      return null;
    })
    .finally(() => {
      sendLogToServer('requestData finished');
    });
}

requestData().then((data) => console.log(data));
