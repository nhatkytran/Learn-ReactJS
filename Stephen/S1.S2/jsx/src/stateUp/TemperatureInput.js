const scaleNames = {
  c: "Celsius",
  f: "Fahrenheit",
};

function TemperatureInput(props) {
  return (
    <fieldset>
      <legend>Enter temperature in {scaleNames[props.scale]}:</legend>
      <input
        value={props.temperature}
        onChange={props.onTemperatureChange.bind(null, props.scale)}
      />
    </fieldset>
  );
}

export default TemperatureInput;
