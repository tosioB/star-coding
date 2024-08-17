import { useState, useRef } from "react";

function App() {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  
  console.log("렌더링...")

  const increaseCountState = () => {
    setCount(count + 1);
  }
  
  const increaseCountRef = () => {
    countRef.current = countRef.current + 1;
    console.log('Ref: ', countRef.current);
  }

  return (
    <div>
      <p>State: {count}</p>
      <p>Ref: {countRef.current}</p>
      <button onClick={increaseCountState}>State 올려</button>
      <button onClick={increaseCountRef}>Ref 올려</button>
    </div>
  );
}

export default App;

/** useRef
 * 컴포넌트가 계속 렌더링 되어도 컴포넌트가 unMount되기 전까지는 값을 유지한다.
 * useState와 비슷하게 어떠한 값을 저장하는 공간으로 사용된다.
 * 변화에는 감지해야 하지만 그 변화가 렌더링을 발생시키면 안되는 어떤 값을 다룰 때 편리하다.
 */

/**
 * const ref = useRef("hi") - hi
 * ref.current = "hello" - hello
 * ref.current = "nice" - nice
 */

/** useRef가 유용한 두가지 상황
 * 1. state의 변경시 렌더링을 발생시키지 말아야하는 값을 다룰때
 * 2. Dom 요소에 접근
 */

/** State & Ref
 * state의 변화 -> 렌더링 -> 컴포넌트 내부 변수들 초기화
 * Ref의 변화 -> No렌더링 -> 변수들의 값이 유지됨
 * state의 변화 -> 렌더링 -> Ref의 값은 유지됨
 */