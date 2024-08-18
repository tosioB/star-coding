function App() {

  async function fetchData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
  }

  fetchData();

  return (
    <>
      <div>Async & Await Fetch API</div>
    </>
  );
}

export default App;

/** Fetch API
 * 특정 URL로 네트워크 요청을 보내는 web API이다.
 * 어떤 특정 서버로부터 데이터를 받아오는 일을 할 때 사용된다.
 */