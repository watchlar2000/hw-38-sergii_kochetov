import {
  ADD_TODO,
  REMOVE_TODO,
  SET_TODO,
  UPDATE_TODO,
} from '../actions/todos.actions';

const initialState = {
  items: [],
};

export default function todosReducer(state = initialState, { type, payload }) {
  switch (type) {
    case SET_TODO:
      return { ...state, items: [...payload] };
    case ADD_TODO:
      return { ...state, items: [payload, ...state.items] };
    case REMOVE_TODO:
      const newItems = state.items.filter((item) => item.id !== payload.id);
      return { ...state, items: [...newItems] };
    case UPDATE_TODO:
      const updatedItems = state.items.map((item) => {
        if (item.id === payload.id) {
          item.isCompleted = !item.isCompleted;
        }
        return item;
      });
      return { ...state, items: [...updatedItems] };
    default:
      return state;
  }
}
