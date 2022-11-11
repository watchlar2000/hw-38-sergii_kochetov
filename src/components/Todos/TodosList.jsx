import React from 'react';
import { TodosItem } from './TodosItem';

export const TodosList = ({ todos, removeTodo, changeComplete }) => {
  console.log(todos);
  return (
    <ul className="todos-list">
      {todos.length === 0 ? (
        <li className="empty-list">
          You don't have any todos yet.
          <p className="note">
            P.S. You can pick an emoji that would be attached to the end of your
            todo.
          </p>
        </li>
      ) : (
        todos.map((todo) => (
          <TodosItem
            todo={todo}
            key={todo.id}
            removeTodo={removeTodo}
            changeComplete={changeComplete}
          />
        ))
      )}
    </ul>
  );
};
