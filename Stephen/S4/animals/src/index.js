import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.querySelector('#root'));

let stateValues = [];
let useStateCalledTimes = 0;

const useState = initState => {
  console.log('Called!');

  useStateCalledTimes += 1;

  if (stateValues[useStateCalledTimes - 1] === undefined)
    stateValues[useStateCalledTimes - 1] = initState;

  const prevPlace = useStateCalledTimes;

  const setStateValue = newValue => {
    stateValues[prevPlace - 1] = newValue;
    console.log(stateValues);
    render();
  };

  return [stateValues[useStateCalledTimes - 1], setStateValue];
};

function App() {
  const [countA, setCountA] = useState(1);
  const [countB, setCountB] = useState(-1);

  return (
    <div>
      <div>CountA: {countA}</div>
      <button onClick={() => setCountA(countA + 1)}>Add</button>
      <hr />
      <div>CountB: {countB}</div>
      <button onClick={() => setCountB(countB + 1)}>Add</button>
    </div>
  );
}

const render = () => {
  useStateCalledTimes = 0;
  root.render(<App />);
};

render();
