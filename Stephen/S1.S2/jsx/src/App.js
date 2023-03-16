import "./App.css";

import FilterableProductTable from "./thinkingInReact/FilterableProductTable";
import data from "./thinkingInReact/data";

function App() {
  return (
    <div>
      <FilterableProductTable products={data} />
    </div>
  );
}

export default App;
