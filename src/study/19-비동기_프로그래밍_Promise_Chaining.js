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

  
  const promise = getData();
  /** Promise Chaining
    promise
      .then((data) => getData)
      .then((data) => getData)
      .then((data) => getData)
      .then(console.log)
   */
  promise
    .then((data) => {
      console.log(data);
      return "hello"
    })
    .then((data) => {
      console.log(data) // hello
    })
  
  return (
    <div>Promise Chaining</div>
  );
}

export default App;