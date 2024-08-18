function App() {

  function networtQequest() { // 네트워크 요청에 2초가 걸린다는걸 흉내낸 함수
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
  }

  async function getUser() {
    throw new Error("에러가 발생했어요!");
    await networtQequest();
    return "토시오";
  }

  async function getTodo() {
    await networtQequest();
    return ["청소하기", "밥먹기"];
  }

  async function getData() {
    let user;
    try {
      user = await getUser();
    } catch(error) {
      console.log(error.message);
      user = "익명";
    }
    const todo = await getTodo();
    console.log(`${user}님 ${todo}를 하세요`);
  }
  
  getData();

  return (
    <>
      <div>Async & Await 에러처리</div>
    </>
  );
}

export default App;