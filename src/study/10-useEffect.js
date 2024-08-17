import { useState } from "react";
import Timer from "./components/10-useEffect/Timer";

function App() {
  const [showTimer, setShowTimer] = useState(false);

  return (
    <div>
      {showTimer && <Timer />}
      <button onClick={() => {setShowTimer(!showTimer)}}>Toggle Timer</button>
    </div>
  );
}

export default App;