const URL = 'http://localhost:3004';

export async function getTodos() {
  const res = await fetch(`${URL}/todos`);
  return res.json();
}

export async function addTodo(todo) {
  const res = await fetch(`${URL}/todos`, {
    method: 'POST',
    body: JSON.stringify(todo),
    headers: {
      'Content-type': 'application/json',
    },
  });
  return res.json();
}

export async function getTodo(id) {
  const res = await fetch(`${URL}/todos/${id}`);
  return res.json();
}

export async function updateTodo(updatedTodo) {
  const { id, completed } = updatedTodo;
  await fetch(`${URL}/todos/${id}`, {
    method: 'PATCH',
    body: JSON.stringify({ completed }),
    headers: {
      'Content-type': 'application/json',
    },
  });
}

export async function removeTodo(id) {
  await fetch(`${URL}/todos/${id}`, {
    method: 'DELETE',
  });
}
