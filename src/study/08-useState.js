import { useState } from "react";

function App() {
  const [names, setNames] = useState([]);
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  }

  const handleUpload = () => {
    setNames((prevState) => {
      console.log(prevState)
      return(
        [...prevState, input]
      )
    })
  }

  return (
    <div>
      <input type="text" value={input} onChange={handleInputChange} />
      <button onClick={handleUpload}>Upload</button>
      {
        names.map((name, index) => {
          return (
            <p key={index}>{name}</p>
          )
        })
      }
    </div>
  );
}

export default App;