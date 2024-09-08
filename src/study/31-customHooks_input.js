import { useInput } from "./hooks/31-customHooks/useInput";

function displayMessage(message) {
  alert(message);
}

function App() {
  const [inputValue, handleChange, handleSubmit] = useInput("", displayMessage);
  const [inputValue2, handleChange2, handleSubmit2] = useInput("", displayMessage);

  return (
    <>
      <div>
        <h1>useInput</h1>
        <input type="text" value={inputValue} onChange={handleChange} />
        <button onClick={handleSubmit}>확인</button>
        
        <input type="text" value={inputValue2} onChange={handleChange2} />
        <button onClick={handleSubmit2}>확인</button>
      </div>
    </>
  );
}

export default App;