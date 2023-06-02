import B from './B';
import C from './C';

function A() {
  console.log('A Render!');

  return (
    <div>
      <h2>A</h2>
      <B />
      <C />
    </div>
  );
}

export default A;
