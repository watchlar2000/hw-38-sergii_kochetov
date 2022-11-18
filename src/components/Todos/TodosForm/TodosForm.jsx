import { useState } from 'react';

export const TodosForm = ({ addNewTodo }) => {
  const [newTodo, setNewTodo] = useState({
    task: '',
    emoji: '',
  });

  const [warning, setWarning] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo.task !== '') {
      addNewTodo({
        ...newTodo,
        completed: false,
      });
      setNewTodo({ task: '', emoji: '' });
      setWarning(false);
    } else {
      setWarning(true);
    }
  };

  const handleForm = (e) => {
    const { name, value } = e.target;

    setNewTodo({
      ...newTodo,
      [name]: value,
    });
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div className="input-data">
          <input
            type="text"
            name="task"
            value={newTodo.task}
            onChange={handleForm}
          />

          <select
            name="emoji"
            className="select"
            value={newTodo.emoji}
            onChange={handleForm}
          >
            <option value="Emoji" defaultValue>
              Emoji
            </option>
            <option value="🏡">🏡</option>
            <option value="👨‍💼">👨‍💼</option>
            <option value="🌍">🌍</option>
            <option value="⏰">⏰</option>
            <option value="☕️">☕️</option>
            <option value="🎹">🎹</option>
            <option value="🔌">🔌</option>
            <option value="🏀">🏀</option>
            <option value="🥧">🥧</option>
            <option value="🐶">🐶</option>
            <option value="💻">💻</option>
          </select>
        </div>

        <button type="submit">Add todo</button>
      </form>
      {warning ? (
        <h4 className="warning">Fill in the input form first!</h4>
      ) : (
        ''
      )}
    </>
  );
};
