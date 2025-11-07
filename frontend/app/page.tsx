'use client';
import { useEffect, useState } from 'react';

export default function Home() {
  const API = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:5052';

  const [todos, setTodos] = useState<string[]>([]);
  const [newTodo, setNewTodo] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API}/api/todo`)
      .then(res => res.json())
      .then(setTodos)
      .finally(() => setLoading(false));
  }, [API]);

  const addTodo = async () => {
    const value = newTodo.trim();
    if (!value) return;

    await fetch(`${API}/api/todo`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(value),
    });

    setTodos([...todos, value]);
    setNewTodo('');
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-10 bg-zinc-50 dark:bg-black text-black dark:text-white">
      <h1 className="text-3xl font-bold mb-6">Todo List</h1>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <ul className="w-full max-w-md space-y-2 mb-6">
            {todos.map((t, i) => (
              <li key={i} className="border rounded px-3 py-2 bg-white dark:bg-zinc-800">
                {t}
              </li>
            ))}
          </ul>

          <div className="flex gap-3">
            <input
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              placeholder="New todo..."
              className="border rounded px-3 py-2 bg-white dark:bg-zinc-800 w-64"
            />
            <button
              onClick={addTodo}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
            >
              Add
            </button>
          </div>
        </>
      )}
    </main>
  );
}