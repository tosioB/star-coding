import { useEffect, useState } from "react";
import { useDebounce } from "./hooks/05-Debounce/useDebounce";

function fetchDataFromServer(value) {
  if (!value) {
    return [];
  }
  console.log("서버로부터 데이터를 가져오는중....")
  const users = [
    { id: 1, name: "김철수", age: "16" },
    { id: 2, name: "이영희", age: "26" },
    { id: 3, name: "김민수", age: "15" },
    { id: 4, name: "홍길동", age: "20" },
    { id: 5, name: "홍민영", age: "45" },
    { id: 6, name: "김민영", age: "32" },
  ];
  return users.filter((user) => {
    return user.name.startsWith(value);
  });
}

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState([]);
  const debouncedInput = useDebounce(input, 1000); // custom hooks

  useEffect(() => {
    const users = fetchDataFromServer(debouncedInput);
    setResult(users);
  }, [debouncedInput]);

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="여기에 검색"
          value={input}
          onChange={(e) => {setInput(e.target.value)}}
        />
        <ul>
          {
            result.map((user) => {
              return (
                <li key={user.id}>
                  <span>{user.name}</span>
                  <span>{user.age}세</span>
                </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  );
}

export default App;

/** Debounce & Throttle
 * 함수가 자주 호출되는 것을 방지한다.
 * 어떤 이벤트가 발생할 때마다 호출되어야 하지만 호출 횟수에 제한을 두고 싶을 때
 */

/** Debounce
 * 이벤트가 연속적으로 발생할 때
 * 제일 마지막 이벤트가 발생한 후 일정 시간이 지난 후에 함수를 호출한다.
 */