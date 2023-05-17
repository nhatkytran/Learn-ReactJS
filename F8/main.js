import html from './core.js';

const cars = ['McLaren', 'Mazda'];

const isSuccess = true;

const view = html`
  <div>${isSuccess && 'Bought cars'}</div>
  <ul>
    ${cars.map(car => `<li>${car}</li>`)}
  </ul>
`;

console.log(view);
