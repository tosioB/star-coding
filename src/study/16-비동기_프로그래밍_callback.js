function App() {
  
  // 1. 로그인
  function login(username, callback) {
    setTimeout(() => {
      callback(username);
    }, 1000);
  }

  // login("토시오", (username) => {
  //   console.log(`${username}님 안녕하세요`)
  // })

  // 2. 장바구니에 넣기
  function addToCart(product, callback) {
    setTimeout(() => {
      callback(product);
    }, 1000);
  }

  // addToCart("감자", (product) => {
  //   console.log(`${product}를 장바구니에 넣었습니다.`)
  // })

  // 3. 결제하기
  function makePayment(cardNumber, product, callback) {
    setTimeout(() => {
      callback(cardNumber, product);
    }, 1000);
  }

  // makePayment("0000000000000000", "감자", (cardNumber, product) => {
  //   console.log(`${cardNumber.slice(0, 6)}로 ${product}를 구매했습니다.`)
  // })

  // 콜백지옥...
  login("토시오", (username) => {
    console.log(`${username}님 안녕하세요`);
    addToCart("감자", (product) => {
      console.log(`${product}를 장바구니에 넣었습니다.`);
      makePayment("0000000000000000", product, (cardNumber, item) => {
        console.log(`${cardNumber.slice(0, 6)}로 ${item}를 구매했습니다.`)
      })
    })
  })

  /** 콜백 지옥을 피하기 위해서는 Promise를 사용
  login("토시오")
    .then((result) => addToCart("감자"))
    .then((product) => makePayment("0000-0000-0000-0000", product))
  */
  

  return (
    <div>비동기 프로그래밍 - 콜백함수(feat.콜백지옥)</div>
  );
}

export default App;