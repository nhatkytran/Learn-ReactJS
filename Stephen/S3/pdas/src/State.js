import { useState } from 'react';

function State({ nums }) {
  const [state, setState] = useState(() =>
    nums.reduce((acc, cur) => {
      console.log('Count');
      return acc + cur;
    }, 0)
  );

  return (
    <div>
      {state}
      <button onClick={() => setState(1000)}>Test2</button>
    </div>
  );
}

export default State;
