import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

var count = 0;

function increase() {
  count++;
  ReactDOM.render(
    <div>
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
      <button onClick={reset}>-</button>
    </div>,
    document.getElementById("root")
  );
}

function reset() {
  count = 0;
  ReactDOM.render(
    <div>
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
      <button onClick={reset}>-</button>
    </div>,
    document.getElementById("root")
  );
}

function App() {
  return (
    <div className="clock">
      <h1>{count}</h1>
      <button className="first" onClick={increase}>
        +
      </button>
      <button className="second" onClick={reset}>
        -
      </button>
    </div>
  );
}
export default App;
