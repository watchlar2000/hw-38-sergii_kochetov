export const SET_TODO = '[TODOS] set todos';
export const ADD_TODO = '[TODOS] add todo';
export const UPDATE_TODO = '[TODOS] update todo';
export const REMOVE_TODO = '[TODOS] remove todo';

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
