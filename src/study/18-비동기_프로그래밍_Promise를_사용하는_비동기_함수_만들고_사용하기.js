function App() {

  // Promise를 사용하는 비동기 함수 만들기
  function getData() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = {name: "철수"}; // Data가 성공했을 때를 보여줄 상수
        // const data = null; // Data가 실패했을 때를 보여줄 상수
  
        if(data) {
          console.log("네트워크 요청 성공");
          resolve(data);
        } else {
          reject(new Error("네트워크 문제다요!!"));
        }
      }, 1000);
    });

    return promise;
  }

  // Promise를 반환하는 비동기 함수 사용하기
  getData()
    .then((data) => {
      const name = data.name
      console.log(`${name}님 안녕하세요.`); // 철수님 안녕하세요.
    })
    .catch((error) => {
      console.log(error); // Error: 네트워크 문제다요!!
      console.log("멋지게 에러처리를 했어요.");
    })
    .finally(() => {
      console.log("마무리작업")
    })

  /** 정리
   * getData()를 호출하면
   * getData()는 promise를 리턴하고
   * 비동기 작업이 성공해서 promise가 Fulfilled(성공)가 되면
   * then안에 있는 콜백함수가 호출된다.
   * 만약 문제가 발생해서  promise가 Rejected(실패)가 되면
   * catch안에 있는 콜백함수가 호출된다.
   * 비동기 작업의 성공과 실패의 여부와는 상관없이
   * finally안에 있는 콜백함수가 호출된다.
   */
  
  return (
    <div>Promise를 사용하는 비동기 함수 만들고 사용하기</div>
  );
}

export default App;

/** Promise API
 * then() - Promise가 성공적으로 이행되었을 때 호출되는 콜백 함수
 * catch() - Promise가 거부되었을 때 호출되는 콜백 함수
 * finally() - Promise가 이행되거나 거부된 후에 항상 호출되는 콜백 함수
 */