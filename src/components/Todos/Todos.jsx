import { useEffect } from 'react';
import './Todos.css';
import { TodosForm } from './TodosForm/TodosForm';
import { TodosList } from './TodosList/TodosList';
import { useDispatch, useSelector } from 'react-redux/es/exports';

import {
  addTodoRequestAction,
  removeTodoRequestAction,
  setTodosRequestAction,
  updateTodoRequestAction,
} from '../../store/actions/todos.actions';

export const Todos = () => {
  const todos = useSelector((state) => state.todos.items);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTodosRequestAction());
  }, []);

  const addNewTodo = (todo) => {
    dispatch(addTodoRequestAction(todo));
  };

  const removeTodoById = async (id) => {
    const isSure = window.confirm('You sure?');

    if (isSure) {
      dispatch(removeTodoRequestAction(id));
    }
  };

  const changeComplete = (id) => {
    dispatch(updateTodoRequestAction(id));
  };

  return (
    <div className="container">
      <h1 className="title">Todo's List</h1>
      <TodosForm addNewTodo={addNewTodo} />
      <TodosList
        todos={todos}
        removeTodo={removeTodoById}
        changeComplete={changeComplete}
      />
    </div>
  );
};
