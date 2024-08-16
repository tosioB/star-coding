import { useCallback, useEffect, useState } from "react";

function App() {
  const [number, setNumber] = useState(0);
  const [toggle, setToggle] = useState(true);

  const someFunction = useCallback(() => {
    console.log(`someFunc: number: ${number}`);
    return;
  }, [number]);

  useEffect(() => {
    console.log("sumFunction이 변경되었습니다.")
  }, [someFunction]);

  return (
    <div>
      <input type="number" value={number} onChange={(e) => setNumber(e.target.value)} />
      <button onClick={() =>  setToggle(!toggle)}>
        {toggle.toString()}
      </button>
      <br/>
      <button onClick={someFunction}>Call someFunc</button>
    </div>
  );
}

export default App;