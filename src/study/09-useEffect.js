import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(1);
  const [name, setName] = useState("");

  const handleCountUpdate = () => {
    setCount(count + 1);
  }

  const handleInputChangge = (e) => {
    setName(e.target.value);
  }

  // 렌더링 될때마다 매번 실행됨
  useEffect(() => {
    console.log("렌더링")
  });

  // 마운팅 + count가 변화할때마다 실행됨
  useEffect(() => {
    console.log("count 렌더링")
  }, [count]);

  // 마운팅 + name이 변경될때마다 실행됨
  useEffect(() => {
    console.log("count 렌더링")
  }, [name]);

  // 화면이 처음 로드 됐을때만 실행
  useEffect(() => {
    console.log("화면이 처음 로드 됐을때만 실행");
  }, []);

  return (
    <div>
      <button onClick={handleCountUpdate}>Update</button>
      <span>count: {count}</span>
      <input type="text" value={name} onChange={handleInputChangge} />
      <span>{name}</span>
    </div>
  );
}

export default App;