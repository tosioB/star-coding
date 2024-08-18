function App() {
  
  // Promise를 사용하는 Web API
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log("에러가 발생했습니다.");
    })
    .finally(() => {
      console.log("마무리 작업")
    })

  return (
    <>
      <div>Promise를 사용하는 Web API</div>
      <div>Fetch API</div>
    </>
  );
}

export default App;

/** Fetch API
 * 특정 URL로 네트워크 요청을 보내는 비동기 함수
 * 특정 서버로부터 데이터를 받아오는 일을 할 때 사용한다.
 * Fetch API는 Promise를 리턴하도록 구현되어있다.
 */