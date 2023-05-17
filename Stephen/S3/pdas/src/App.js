import { useReducer, useRef, useState } from 'react';

const logger = reducer => (state, action) => {
  console.group(action.type);
  console.log('prevState:', state);
  console.log('Data:', action.payload);

  const newState = reducer(state, action);

  console.log('newState:', newState);
  console.groupEnd();

  return newState;
};

const ADD_TODO = 'add_todo';
const CHECK_TODO = 'check_todo';
const DELETE_TODO = 'delete_todo';
const EDIT_TODO = 'edit_todo';

const ACTIONS = {
  addTodo: todo => ({
    type: ADD_TODO,
    payload: { id: todo.id, text: todo.text, done: false },
  }),
  checkTodo: todo => ({
    type: CHECK_TODO,
    payload: { id: todo.id, done: todo.done },
  }),
  deleteTodo: todo => ({ type: DELETE_TODO, payload: { id: todo.id } }),
  editTodo: todo => ({
    type: EDIT_TODO,
    payload: { id: todo.id, text: todo.text },
  }),
};

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case CHECK_TODO:
      return state.map(todo => {
        if (todo.id === action.payload.id)
          return {
            ...todo,
            done: action.payload.done,
          };
        return todo;
      });
    case DELETE_TODO:
      return state.filter(todo => todo.id !== action.payload.id);
    case EDIT_TODO:
      return state.map(todo => {
        if (todo.id === action.payload.id)
          return {
            ...todo,
            text: action.payload.text,
          };
        return todo;
      });
    default:
      throw new Error('Invalid action!');
  }
};

function App() {
  const [todos, dispatch] = useReducer(logger(reducer), [
    { id: 0, text: 'Visit Kafka Museum', done: true },
    { id: 1, text: 'Watch a puppet show', done: false },
    { id: 2, text: 'Lennon Wall pic', done: false },
  ]);

  console.log('Todos:', todos);

  const handleAddTodo = todo => {
    dispatch(
      ACTIONS.addTodo({
        id: todos.at(-1)?.id + 1 || 0,
        text: todo,
      })
    );
  };

  const handleCheckTodo = (id, checked) => {
    dispatch(ACTIONS.checkTodo({ id, done: checked }));
  };

  const handleDeleteTodo = id => dispatch(ACTIONS.deleteTodo({ id }));

  const handleEditTodo = todo =>
    dispatch(
      ACTIONS.editTodo({
        id: todo.id,
        text: todo.text,
      })
    );

  return (
    <div>
      <h2>Todos</h2>
      <AddTask onAddTodo={handleAddTodo} />
      <hr />
      <TaskList
        todos={todos}
        onCheckTodo={handleCheckTodo}
        onDeleteTodo={handleDeleteTodo}
        onEditTodo={handleEditTodo}
      />
    </div>
  );
}

function AddTask({ onAddTodo }) {
  const [todo, setTodo] = useState('');
  const inputRef = useRef();

  const handleAddTodo = () => {
    onAddTodo(todo);
    setTodo('');

    inputRef.current.focus();
  };

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        value={todo}
        onChange={event => setTodo(event.target.value)}
      />
      <button onClick={handleAddTodo}>Add</button>
    </div>
  );
}

function TaskList({ todos, onCheckTodo, onDeleteTodo, onEditTodo }) {
  const [updatedTodos, setUpdatedTodos] = useState({});

  const handleCheckTodo = (id, checked) => onCheckTodo(id, checked);

  console.log('Update:', updatedTodos);

  const deleteUpdatedTodos = id => {
    const newUpdatedTodos = { ...updatedTodos };

    delete newUpdatedTodos[id];
    setUpdatedTodos(newUpdatedTodos);
  };

  const handleDeleteTodo = id => {
    deleteUpdatedTodos(id);
    onDeleteTodo(id);
  };

  const handleEditTodo = (id, text) =>
    setUpdatedTodos(state => ({
      ...state,
      [id]: text,
    }));

  const handleEditTodoValue = (event, id) =>
    setUpdatedTodos(state => ({
      ...state,
      [id]: event.target.value,
    }));

  const handleSaveEditTodo = id => {
    onEditTodo(id, updatedTodos[id]);
    deleteUpdatedTodos(id);
  };

  return (
    <div>
      {todos.map(todo => (
        <div key={todo.id}>
          <input
            type="checkbox"
            checked={todo.done}
            onChange={() => handleCheckTodo(todo.id, !todo.done)}
          />
          {updatedTodos.hasOwnProperty(todo.id) ? (
            <input
              type="text"
              value={updatedTodos[todo.id]}
              onChange={event => handleEditTodoValue(event, todo.id)}
            />
          ) : (
            todo.text
          )}
          {updatedTodos.hasOwnProperty(todo.id) ? (
            <>
              <button onClick={() => handleSaveEditTodo(todo.id)}>Save</button>
              <button onClick={() => deleteUpdatedTodos(todo.id)}>
                Cancel
              </button>
            </>
          ) : (
            <button onClick={() => handleEditTodo(todo.id, todo.text)}>
              Edit
            </button>
          )}
          <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default App;
