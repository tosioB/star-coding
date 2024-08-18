function App() {

  function getData(callback) {
    setTimeout(() => {
      console.log("서버에서 데이터를 받아왔어요");
      // callback({name: "이름"});
      callback();
    }, 2000);
  }
  
  // getData((data) => {
  //   console.log(data.name);
  // });
  
  console.log("getData() 함수가 끝나고 이 콘솔을 실행하고 싶어 하지만 그럴 수 없어!");
  
  getData(() => {
    console.log("getData() 함수가 끝나고 이 콘솔을 실행하고 싶어 콜백함수를 사용해서 가능해졌어!!")
  });

  return (
    <div>비동기 프로그래밍 - 콜백함수</div>
  );
}

export default App;

// 콜백함수 - 다른 함수의 인자로 전달되는 함수

/**
 * 콜백함수를 사용하면 비동기작업이 완료 된 후에 실행되어야 하는 코드를
 * 명확하게 정의할 수 있다.
 */