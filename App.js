import { useState } from "react";
import "./App.css";
function App() {
  const [number, setNumber] = useState(0);
  const handleCount = (status) => {
    setNumber(status === 0 ? 0 : number + status);
  };
  const color = {
    color: number === 0 ? "green" : number > 0 ? "blue" : "red",
  };
  return (
    <div>
      <h1>COUNTER</h1>
      <p className="result" style={color}>
        {number}
      </p>
      <div className="btn-group">
        <button className="btn" onClick={() => handleCount(1)}>
          Increase
        </button>
        <button className="btn" onClick={() => handleCount(0)}>
          Reset
        </button>
        <button className="btn" onClick={() => handleCount(-1)}>
          Decrease
        </button>
      </div>
    </div>
  );
}

export default App;
