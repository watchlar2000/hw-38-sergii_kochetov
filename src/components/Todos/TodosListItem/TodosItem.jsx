export const TodosItem = ({ todo, removeTodo, changeComplete }) => {
  return (
    <li key={todo.id} className="todos-item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => changeComplete(todo.id)}
      />
      <span className={`todos-content ${todo.completed ? ' completed' : ''}`}>
        {todo.task + ` ${todo?.emoji !== undefined ? todo.emoji : ''}`}
      </span>
      <button
        type="button"
        className="material-symbols-outlined"
        onClick={() => removeTodo(todo.id)}
      >
        close
      </button>
    </li>
  );
};
