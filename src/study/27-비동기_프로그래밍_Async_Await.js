function App() {

  function networtQequest() { // 네트워크 요청에 2초가 걸린다는걸 흉내낸 함수
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("데이터를 받아왔습니다.");
        resolve("서버 1");
      }, 2000);
    });
  }

  async function getUser() { // A영역
    await networtQequest();
    await networtQequest();
    // const result = await networtQequest();
    return "토시오";
  }

  const user = getUser();

  user.then((name) => {
    console.log(name);
  });

  /** A영역
   * 위 코드 await networtQequest()에서
   * await이 없다면 console.log(name)의 출력값은
   * "토시오"를 먼저 출력하고 2초 뒤에
   * "데이터를 받아왔습니다." 를 두번 출력한다.
   * 
   * await이 있다면 console.log(name)의 출력값은
   * 2초 뒤에 "데이터를 받아왔습니다."를 출력하고
   * 4초 뒤에 "데이터를 받아왔습니다."를 출력하고
   * "토시오"를 출력한다.
   * 
   * await의 유무에 따라 출력되는 순서와 값이 바뀐다.
   * 
   * async함수 안에서 여러개의 비동기 함수를 순차적으로 호출하고 싶다면
   * await을 사용해서 각각의 비동기 함수가 완료될때까지 기다리면 된다.
   */

  return (
    <>
      <div>Async & Await</div>
    </>
  );
}

export default App;

/** Async
 * 비동기 함수를 정의할때 사용하는 키워드
 * Async가 붙은 함수는 항상 Promise를 반환하는 비동기 함수로 변신한다.
 */

/** Await
 * Promise가 완료될때까지 기다려주는 역할을 한다.
 * Async함수 안에서 비동기 함수가 완료되길 기다려야 한다면 비동기함수 앞에 await을 붙여주면 된다.
 * Await은 반드시 Async 키워드가 붙은 함수 내부에서만 사용할 수 있다.
 */
