import React, { useEffect, useState } from 'react';
import './Todos.css';
import { TodosForm } from './TodosForm';
import { TodosList } from './TodosList';

export const Todos = () => {
  const [todos, setTodos] = useState([]);

  const saveToLocalStorage = (data, name) => {
    localStorage.setItem(name, JSON.stringify(data));
  };

  useEffect(() => {
    const todosLocal = JSON.parse(localStorage.getItem('todos'));
    if (todosLocal.length !== 0) {
      setTodos(todosLocal);
    }
  }, []);

  useEffect(() => {
    saveToLocalStorage(todos, 'todos');
  }, [todos]);

  const addNewTodo = (todo) => {
    if (todos !== null) {
      setTodos((prevState) => [todo, ...prevState]);
    } else {
      setTodos([todo]);
    }
  };

  const removeTodo = (id) => {
    const isSure = window.confirm('You sure?');
    if (isSure) {
      setTodos((prevState) => prevState.filter((todo) => todo.id !== id));
    }
  };

  const changeComplete = (id) => {
    setTodos((prevState) =>
      prevState.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isCompleted: !todo.isCompleted };
        }
        return todo;
      })
    );
  };

  return (
    <div className="container">
      <h1 className="title">Todo's List</h1>
      <TodosForm addNewTodo={addNewTodo} />
      <TodosList
        todos={todos}
        removeTodo={removeTodo}
        changeComplete={changeComplete}
      />
    </div>
  );
};
