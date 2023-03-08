import { useState } from "react";
import "./App.css";

import About from "./About";

function App(props) {
  const [state, setState] = useState(() => {
    console.log("Initial");
    return 1;
  });

  const handleAdd = () => {
    // setState(state + 1);
    // setState(state + 1);
    // setState(state + 1);
    setState((currentState) => {
      return currentState + 1;
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
