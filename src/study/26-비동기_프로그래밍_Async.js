function App() {

  async function getUser() {
    return "토시오";
  }

  const user = getUser();
  console.log(user); // Promise를 반환

  user.then((name) => {
    console.log(name); // 토시오
  });

  return (
    <>
      <div>Async</div>
    </>
  );
}

export default App;

/** Async
 * 비동기 함수를 정의할때 사용하는 키워드
 * Async가 붙은 함수는 항상 Promise를 반환하는 비동기 함수로 변신한다.
 */