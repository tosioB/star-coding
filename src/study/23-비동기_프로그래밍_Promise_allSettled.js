function App() {

  function getName() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // resolve("철수");
        reject(new Error("에러: 이름이 없어요"));
      }, 1000);
    })
  }

  function getTodo() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("밥먹기");
        // reject(new Error("에러: 할일이 없어요"));
      }, 2000);
    })
  }

  // getName과 getTogo를 동시에 실행시킴
  const promise = Promise.allSettled([getName(), getTodo()]);
  promise
    .then((data) => {
      console.log(data) // 콘솔에 성공했는지 실패했는지 나옴
    })

  return (
    <>
      <div>Promise.allSettled</div>
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

/** Promise.allSettled()
 * Promise들중 어떤 Promise가 성공했고 실패했는지 상세하게 알고 싶을때
 * Promise.allSettled은 인자로 배열을 전달받는다.
 * 배열에 인자로 전달된 모든 Promise들이 전부 완료될 때까지 기다린다.
 * Promise들이 성공이든 실패든 상관없이 모든 Promise들이 다 끝날때까지 기다린다.
 */