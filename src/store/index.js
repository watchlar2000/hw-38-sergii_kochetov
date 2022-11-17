import { combineReducers, createStore } from 'redux';
import todosReducer from './reducers/todos.reducers';
// import rootReducer from './reducers/';

const rootReducer = combineReducers({
  todos: todosReducer,
});

const store = createStore(rootReducer);

export default store;
