import { useContext } from 'react';
import { AppContext } from './Provider';
import D from './D';

function B() {
  console.log('B Render!');

  const { counter } = useContext(AppContext);

  return (
    <div>
      <div>B with counter {counter}</div>
      <D />
    </div>
  );
}

export default B;
