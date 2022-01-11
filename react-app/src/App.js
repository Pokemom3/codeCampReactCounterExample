import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(100);
  const [name, setName] = useState("Name");

  function changeName(e) {
    console.log(e.target.value);
    return setName(e.target.value);
  }
  function incrementCount() {
    return setCounter(counter + 1);
  }

  function decreaseCount() {
    return setCounter(counter - 1);
  }
  return (
    <div>
      <h2>You have clicked the counter!{counter}</h2>
      <button onClick={incrementCount}>Plus1</button>
      <button onClick={decreaseCount}>Minus1</button>
      <h2>{name}</h2>
      <input type="text" value={name} onChange={changeName} />
    </div>
  );
}

export default App;
