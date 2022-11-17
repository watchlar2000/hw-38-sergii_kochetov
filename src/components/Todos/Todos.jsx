import { useEffect } from 'react';
import './Todos.css';
import { TodosForm } from './TodosForm/TodosForm';
import { TodosList } from './TodosList/TodosList';
import { useDispatch, useSelector } from 'react-redux/es/exports';

import { addTodo, getTodos, removeTodo, updateTodo } from './todosApi';
import {
  addTodoAction,
  removeTodoAction,
  setTodosAction,
  updateTodoAction,
} from '../../store/actions/todos.actions';

export const Todos = () => {
  const todos = useSelector((state) => state.todos.items);

  const dispatch = useDispatch();

  useEffect(() => {
    async function getTodosInfo() {
      try {
        const todosData = await getTodos();
        const todosReversed = todosData.reverse();
        dispatch(setTodosAction(todosReversed));
      } catch (error) {
        console.error(error);
      }
    }

    getTodosInfo();
  }, [dispatch]);

  const addNewTodo = async (todo) => {
    try {
      const newTodo = await addTodo(todo);
      dispatch(addTodoAction(newTodo));
    } catch (error) {
      console.error(error);
    }
  };

  const removeTodoById = async (id) => {
    const isSure = window.confirm('You sure?');

    if (isSure) {
      try {
        await removeTodo(id);
        dispatch(removeTodoAction({ id }));
      } catch (error) {
        console.error(error);
      }
    }
  };

  const changeComplete = async (id) => {
    try {
      await updateTodo(id);
      dispatch(updateTodoAction({ id }));
    } catch (error) {
      console.error(error);
    }
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
