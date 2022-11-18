import { TodosItem } from '../TodosListItem/TodosItem';

export const TodosList = ({ todos, removeTodo, changeComplete }) => {
  return (
    <ul className="todos-list">
      {todos.map((todo, i) => (
        <TodosItem
          todo={todo}
          key={todo.id}
          removeTodo={removeTodo}
          changeComplete={changeComplete}
        />
      ))}
    </ul>
  );
};
