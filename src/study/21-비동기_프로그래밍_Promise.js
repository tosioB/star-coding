function App() {
  
  // 1. 로그인
  function login(username) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if(username) {
          resolve(username)
        } else {
          reject(new Error("사용자 이름을 입력하세요."))
        }
      }, 1000);
    })
  }

  // 2. 장바구니에 넣기
  function addToCart(product) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if(product) {
          resolve(product);
        } else {
          reject(new Error("장바구니에 넣을 상품이 없어요!"));
        }
      }, 1000);
    })
  }

  // 3. 결제하기
  function makePayment(cardNumber, product) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if(cardNumber.length !== 16) {
          reject(new Error("잘못된 카드 번호 입니다."));
        }

        if(!product) {
          reject(new Error("결제할 상품을 넣어주세요."));
        }

        resolve(product);
      }, 1000);
    })
  }

  login("")
    .catch(() => {
      return "비회원";
    })
    .then((username) => {
      console.log(`${username}님 안녕하세요.`);
      return addToCart("감자");
    })
    .catch(() => {
      return "옥수수"; // 위 then의 return addToCart("감자"); 에서 값이 없다면 옥수수를 리턴함
    })
    .then((product) => {
      console.log(`${product}를 장바구니에 넣었습니다.`);
      return makePayment("1111222233334444", product);
    })
    .then((product) => {
      console.log(`${product}를 결제했습니다.`);
    })
    .catch((error) => {
      console.log(error.message);
    })
    .finally(() => {
      console.log("마무리 작업");
    })

  return (
    <div>ddd</div>
  );
}

export default App;