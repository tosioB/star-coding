function App() {

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = {name: "철수"}; // Data가 성공했을 때를 보여줄 상수
      // const data = null; // Data가 실패했을 때를 보여줄 상수
      
      if(data) {
        console.log("네트워크 요청 성공");
        resolve(data);
      } else {
        reject(new Error("네트워크 문제!!"));
      }
    }, 1000);
  });

  setTimeout(() => {
    console.log(promise);
  }, 2000);

  return (
    <div>Promise</div>
  );
}

export default App;

/** Promise
 * 비동기 처리에 사용되는 자바스크립트 객체
 * 비동기 작업이 맞이할 성공 혹은 실패를 나타냄
 * Promise객체는 생성되는 즉시 전달해준 익시큐터 함수를 호출시킨다.
 */

/** Promise의 3가지 상태
 * Pending - 대기
 * Fulfilled - 성공
 * Rejected - 실패
 */

/** resolve
 * 비동기 작업이 완료됐을때 알려주는 함수
 * 비동기 작업이 성공하면 resolve 호출
*/

/** reject
 * 비동기 작업이 실패했을때 알려주는 함수
 * 비동기 작업이 실패하면 reject 호출
*/