//함수 호출시에 옵셔널 체이닝을 사용하는 것은 함수를 매개변수로 받아서 그것을 호출할 때 유용하게 사용될 수 있다.
function loadData(onComplete) {
  console.log('loading....');
  onComplete?.();
}
loadData();
