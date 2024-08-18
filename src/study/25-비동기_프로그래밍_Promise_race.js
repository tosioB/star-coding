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
        reject(new Error("에러: 할일이 없어요"));
      }, 2000);
    })
  }

  const promise = Promise.race([getName(), getTodo()]);
  // 전달해준 Promise들중 제일 빨리 완료된 Promise가 resolve(성공)하면 반환된 Promise도 성공한다.
  // 전달해준 Promise들중 제일 빨리 완료된 Promise가 reject(실패)하면 반환된 Promise도 실패한다.
  promise
    .then((data) => {
      console.log(data); // 철수
    })
    .catch((error) => {
      console.log(error);
    })

  return (
    <>
      <div>Promise.race</div>
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

/** Promise.race()
 * Promise.race를 인자로 배열을 전달받는다.
 * 전달해준 Promise들중 제일 빨리 완료된 Promise가 resolve(성공)하면 반환된 Promise도 성공한다.
 * 전달해준 Promise들중 제일 빨리 완료된 Promise가 reject(실패)하면 반환된 Promise도 실패한다.
 */