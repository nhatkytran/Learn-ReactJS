import './App.css';

function CarList({ cars, children }) {
  return <ul>{cars.map(children)}</ul>;
}

function App() {
  const cars = ['McLaren 765LT', 'BMW I8'];

  return (
    <div>
      <CarList cars={cars}>
        {(car, index) => <li key={index}>{car}</li>}
      </CarList>
    </div>
  );
}

export default App;
