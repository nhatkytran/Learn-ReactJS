import { SET_TODO, ADD_TODO, DELETE_TODO } from './constants';

const ACTIONS = {
  setTodo: payload => ({ type: SET_TODO, payload }),
  addTodo: payload => ({ type: ADD_TODO, payload }),
  deleteTodo: payload => ({ type: DELETE_TODO, payload }),
};

export default ACTIONS;
