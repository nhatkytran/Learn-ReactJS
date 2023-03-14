import React, { useState } from "react";

import BoilingVerdict from "./BoilingVerdict";
import TemperatureInput from "./TemperatureInput";

function Calculator() {
  const [state, setState] = useState({ temperature: 0, type: "c" });
  const { type, temperature } = state;

  console.log(state);

  const toCelsius = (fahrenheit) => ((fahrenheit - 32) * 5) / 9;
  const toFahrenheit = (celsius) => (celsius * 9) / 5 + 32;

  const handleChange = (type, event) => {
    let temp = parseFloat(event.target.value);

    if (Number.isNaN(temp)) temp = 0;

    setState((prevState) => ({ ...prevState, temperature: temp, type }));
  };

  return (
    <React.Fragment>
      <TemperatureInput
        scale="c"
        temperature={type === "c" ? temperature : toCelsius(temperature)}
        onTemperatureChange={handleChange}
      />
      <TemperatureInput
        scale="f"
        temperature={type === "f" ? temperature : toFahrenheit(temperature)}
        onTemperatureChange={handleChange}
      />
      <BoilingVerdict celsius={1} />
    </React.Fragment>
  );
}

export default Calculator;
