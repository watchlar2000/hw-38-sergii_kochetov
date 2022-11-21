import {
  addTodo,
  getTodos,
  removeTodo,
  updateTodo,
} from '../../components/Todos/todosApi';

export const SET_TODO = '[Todos] set todos';
export const ADD_TODO = '[Todos] add todo';
export const UPDATE_TODO = '[Todos] update todo';
export const REMOVE_TODO = '[Todos] remove todo';

export function setTodosAction(payload) {
  return {
    type: SET_TODO,
    payload,
  };
}

export function addTodoAction(payload) {
  return {
    type: ADD_TODO,
    payload,
  };
}

export function updateTodoAction(payload) {
  return {
    type: UPDATE_TODO,
    payload,
  };
}

export function removeTodoAction(payload) {
  return {
    type: REMOVE_TODO,
    payload,
  };
}

// thunk action creator
export function setTodosRequestAction() {
  return async function (dispatch) {
    const todosData = await getTodos();
    const todosReversed = todosData.reverse();
    dispatch(setTodosAction(todosReversed));
  };
}

export function addTodoRequestAction(todo) {
  return async function (dispatch) {
    const newTodo = await addTodo(todo);
    dispatch(addTodoAction(newTodo));
  };
}

export function updateTodoRequestAction(updatedTodo) {
  return async function (dispatch) {
    const { id } = updatedTodo;
    dispatch(updateTodoAction(id));
    await updateTodo(updatedTodo);
  };
}

export function removeTodoRequestAction(id) {
  return async function (dispatch) {
    await removeTodo(id);
    dispatch(removeTodoAction({ id }));
  };
}
