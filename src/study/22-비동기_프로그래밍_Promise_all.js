function App() {

  function getName() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("철수");
        reject(new Error("에러: 이름이 없어요"));
      }, 1000);
    })
  }

  function getTodo() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("밥먹기");
        reject(new Error("에러: 할일이 없어요"));
      }, 2000);
    })
  }

  // getName과 getTogo를 동시에 실행시킴
  const promise = Promise.all([getName(), getTodo()]);
  promise
    .then((data) => {
      console.log(data) // ["철수", "밥먹기"]
    })
    .catch((error) => {
      // 배열에 전달해준 Promise들중 하나라도 실패하면 Promise.all로부터 반환된 promise도 실패하게 된다.
      console.log(error);
    })

  return (
    <>
      <div>Promise.all</div>
    </>
  );
}

export default App;

/** Promise Static 함수
 * Promise.all
 * Promise.allSettled
 * Promise.any
 * Promise.race
 */

/** Promise.all()
 * 여러개의 Promise를 동시에 처리할 수 있다.
 * Promise.all은 인자로 배열을 전달받는다.
 * 배열 안에는 여러개의 Promise를 넣어줄 수 있다.
 */