import { useState } from "react";
import "./assets/06-Throttle.scss"
import { useThrottle } from "./hooks/06-Throttle/useThrottle";

function hackLottoNumbers() { // 로또 번호를 생성하는 함수
  console.log("로또 번호 진짜 열심히 해킹하는중");
  const lottoNumbers = [];
  for (let i = 0; i < 6; i++) {
    const number = Math.floor(Math.random() * 45) + 1;
    lottoNumbers.push(number);
  }
  return lottoNumbers;
};

/** Throttle 계획
 * 사용자가 버튼을 클릭해서 hackLottoNumbers함수가 호출되면
 * 함수가 호출 된 시간을 기록하고
 * 사용자가 버튼을 한번 더 누를 때의 시간과
 * 이전의 기록된 시간을 비교
 * 만약 이전 호출로부터 1초가 지나지 않았다면 무시
 * 1초가 지났을 경우에만 함수가 한번 더 호출될 수 있도록 허락한다.
 */

function App() {
  const [lottoNumbers, setLottoNumbers] = useState([0, 0, 0, 0, 0, 0]);

  const handleClick = useThrottle(() => { // custom hooks
    const result = hackLottoNumbers();
    setLottoNumbers(result);
  }, 1000);

  return (
    <>
      <div className="container">
        <h1 className="title">로또 번호 맞춰줄게</h1>
        <button onClick={handleClick}>번호 맞추기</button>
        <div className="numbers">
          {
            lottoNumbers.map((number, idx) => {
              return(
                <span key={idx} className="number">
                  {number}
                </span>
              )
            })
          }
        </div>
      </div>
    </>
  );
}

export default App;

/** Debounce & Throttle
 * 함수가 자주 호출되는 것을 방지한다.
 * 어떤 이벤트가 발생할 때마다 호출되어야 하지만 호출 횟수에 제한을 두고 싶을 때
 */

/** Throttle
 * 함수가 한번 호출되면
 * 일정 시간이 지나기 전에 다시 호출되지 않도록 막는 것
 */