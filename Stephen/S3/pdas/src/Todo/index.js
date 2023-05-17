import { useRef, useState } from 'react';
import ACTIONS from './actions';
import reducer, { initState } from './reducer';

const useReducer2 = (reducer, initState) => {
  const [state, setState] = useState(initState);

  return [state, payload => setState(state => reducer(state, payload))];
};

const logger = fn => (state, action) => {
  console.log('prevState:', state);

  const newState = fn(state, action);

  console.log('newState:', newState);

  return newState;
};

function Todos() {
  const [state, dispatch] = useReducer2(logger(reducer), initState);
  const inputRef = useRef();

  const handleTodo = event => dispatch(ACTIONS.setTodo(event.target.value));

  const handleAddTodo = () => {
    dispatch(ACTIONS.addTodo(state.todo));
    dispatch(ACTIONS.setTodo(''));

    inputRef.current.focus();
  };

  const handleDeleteTodo = todo => dispatch(ACTIONS.deleteTodo(todo));

  return (
    <div>
      <div>
        <input
          ref={inputRef}
          type="text"
          placeholder="Todo..."
          value={state.todo}
          onChange={handleTodo}
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>
      <div>
        <ul>
          {state.todos.map(todo => (
            <li key={todo}>
              <p>{todo}</p>
              <button onClick={() => handleDeleteTodo(todo)}>X</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Todos;
