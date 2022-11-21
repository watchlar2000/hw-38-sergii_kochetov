import { TodosItem } from '../TodosListItem/TodosItem';

export const TodosList = ({ todos, removeTodo, changeComplete }) => {
  const todosReversed = todos;
  return (
    <ul className="todos-list">
      {todosReversed.map((todo, i) => (
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
