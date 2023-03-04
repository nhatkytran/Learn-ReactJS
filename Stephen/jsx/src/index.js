// 1. Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import reportWebVitals from "./reportWebVitals";

import App, { name as myName } from "./App";

console.log(myName);

// 2. Get a reference to the div with ID root
// 3. Tell React to take control of that element
const root = ReactDOM.createRoot(document.getElementById("root"));

// 4. Create a component
// 5. Show the component on the screen
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
