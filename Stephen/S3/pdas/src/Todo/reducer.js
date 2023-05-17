import { SET_TODO, ADD_TODO, DELETE_TODO } from './constants';

export const initState = {
  todo: '',
  todos: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case SET_TODO:
      return {
        ...state,
        todo: action.payload,
      };
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo !== action.payload),
      };
    default:
      throw new Error('Invalid action!');
  }
};

export default reducer;
