import { useRef, useState } from "react";

function App() {
  const [renderer, setRenderer] = useState(0);
  const countRef = useRef(0);
  let countVar = 0;

  const doRendering = () => {
    setRenderer(renderer + 1);
  }

  const increaseRef = () => {
    countRef.current = countRef.current + 1;
    console.log('ref: ', countRef.current);
  }

  const increaseVar = () => {
    countVar = countVar + 1
    console.log('var: ', countVar);
  }

  const printResults = () => {
    console.log(`ref: ${countRef.current}, var: ${countVar}`);
  }

  return (
    <div>
      <p>Ref: {countRef.current}</p>
      <p>Var: {countVar}</p>
      <button onClick={doRendering}>렌더!</button>
      <button onClick={increaseRef}>Ref 올려</button>
      <button onClick={increaseVar}>Var 올려</button>
      <button onClick={printResults}>Ref Var 값 출력</button>
    </div>
  );
}

export default App;

/** Ref와 일반 변수의 차이
 * Ref는 렌더링 이후에도 값을 유지하지만
 * Var는 렌더링 이후에 값이 초기화 된다.
 * 
 * ex)
 * 초기화면에서 Ref를 3으로 올리고
 * var를 2로 올리고
 * Ref Var 값 출력 버튼을 누르면
 * 콘솔에 Ref: 3, Var: 2 출력된다.
 * 그리고 렌더! 버튼을 클릭해서 화면을 렌더링 하면
 * 화면에 Ref는 3을 표시하고
 * Var는 변화가 없다
 * 이 상태에서 Ref Var 값 출력 버튼을 누르면
 * 렌더링이 됐어도 Ref는 3을 출력하지만
 * Var는 렌더링으로 인해 값이 0으로 초기화 된다.
 */