import "./App.css";

import ListItem from "./listItem";

function App() {
  const numbers = [1, 2, 3];

  return (
    <div>
      {numbers.map((number, index) => {
        return <ListItem key={index} number={number} />;
      })}
    </div>
  );
}

export default App;
