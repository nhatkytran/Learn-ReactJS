import { useState } from "react";
import "./App.css";

import About from "./About";

function App(props) {
  const [state, setState] = useState({ count: 1, fruit: "Banana" });

  const handleAdd = () => {
    setState((currentState) => {
      return currentState.count + 1;
    });
  };

  return (
    <div>
      <h1>{state}</h1>
      <button onClick={handleAdd}>Add</button>
      <About />
    </div>
  );
}

export default App;
