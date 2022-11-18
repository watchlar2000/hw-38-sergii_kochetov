import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import todosReducer from './reducers/todos.reducers';
import thunkMiddleware from 'redux-thunk';

const rootReducer = combineReducers({
  todos: todosReducer,
});

const middlewares = [thunkMiddleware];
const middlewareEnhancer = applyMiddleware(...middlewares);

const enhacers = [middlewareEnhancer];
const composedEnhancers = composeWithDevTools(...enhacers);

const store = createStore(rootReducer, composedEnhancers);

export default store;
