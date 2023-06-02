import { useContext } from 'react';
import { AppContext } from './Provider';

function C() {
  console.log('C Render!');

  const { counter, setCounter } = useContext(AppContext);

  return (
    <div>
      <div>C</div>
      <button onClick={() => setCounter(counter + 1)}>Add</button>
    </div>
  );
}

export default C;
