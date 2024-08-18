function App() {

  function getName() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("철수");
        // reject(new Error("에러: 이름이 없어요"));
      }, 1000);
    })
  }

  function getTodo() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // resolve("밥먹기");
        reject(new Error("에러: 할일이 없어요"));
      }, 2000);
      /**
       * 시간이 getName의 1초보다 더 빠른 값을 넣으면
       * 밑의 promise의 data값은 밥먹기가 나온다
       * 
       * 예시 - 2000을 500으로 고치면
       * promise의 data값이 철수가 아니라
       * 밥먹기가 나온다.
       * 
       * promise.any의 기능때문(기능 설명은 하단에...)
       */
    })
  }

  const promise = Promise.any([getName(), getTodo()]);
  promise
    .then((data) => {
      console.log(data); // 철수
    });

  return (
    <>
      <div>Promise.any</div>
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

/** Promise.any()
 * Promise.any는 인자로 배열을 전달받는다.
 * 전달해준 Promise들중 가장 먼저 resolve(성공)가 된것의 값을 가진다.
 * Promise.any에서 catch를 호출하려면 배열안의 모든 Promise들이 전부 실패해야 한다.
 * "resolve(성공)"의 관점!!!
 */