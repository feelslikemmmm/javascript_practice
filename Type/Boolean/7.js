// nullish coalescing 은 or 연산자와 비슷하지만 한가지 다른 점은 빈 문자열이나 0에 대해서 기본값이 사영되지 않는다는 점이다.
const product = { desc: '', price: 0 };
const descInput = product.desc ?? '상품 설명을 입력하세요';
const priceInput = product.price ?? 1000;
