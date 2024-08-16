import { useRef } from "react";

export function useThrottle(callback, delay) {
  const lastRun = useRef(Date.now()) // 함수가 호출된 시간을 기록하기 위한 변수
  // useRef를 사용한 이유 - state가 업데이트 될 때 기록한 시간 값이 초기화 되는걸 막기 위함
  /** Date.now()
   * 1970년 1월 1일 0시 0분 0초 부터
   * 현재까지 경과된 시간을
   * 밀리초 단위로 반환
  */

  return () => {
    const timeElapsed = Date.now() - lastRun.current;
    /** timeElapsed - 이전에 함수가 호출됐을때 부터 버튼이 클릭됐을때까지의 시간을 담고있다.(ms단위)
     * 사용자가 버튼을 클릭했을 때의 시간인 Date.now()에서
     * 기록된 시간인 lastRun.current을 빼기
     */ 

    if (timeElapsed >= delay) { // timeElapsed가 1000ms보다 클 때
      callback();
      lastRun.current = Date.now();
      /** lastRun.current = Date.now() - 기록된 시간을 업데이트
       * lastRun.current는 현재 버튼이 클릭된 시간( Date.now() )으로 업데이트
      */
    }
  }
}