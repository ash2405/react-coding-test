// Todo.tsx
import { useCallback, useMemo, useState } from "react";
import { Input } from "./Input";
import { TodoList } from "./TodoList";

export interface TodoItem {
  id: string;
  title: string;
  completed: boolean;
}

const createTodo = (title: string): TodoItem => ({
  id: crypto.randomUUID(),
  title,
  completed: false,
});

export const Todo = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);

  const handleAddTodo = useCallback((title: string) => {
    const trimmedTitle = title.trim();

    if (!trimmedTitle) {
      return;
    }

    setTodos((prevTodos) => [
      ...prevTodos,
      createTodo(trimmedTitle),
    ]);
  }, []);

  const handleToggleTodo = useCallback((id: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo,
      ),
    );
  }, []);

  const handleDeleteTodo = useCallback((id: string) => {
    setTodos((prevTodos) =>
      prevTodos.filter((todo) => todo.id !== id),
    );
  }, []);

  const completedCount = useMemo(
    () => todos.filter((todo) => todo.completed).length,
    [todos],
  );

  return (
    <section className="mx-auto mt-10 w-full max-w-xl rounded-2xl border bg-white p-6 shadow-sm">
      <header className="mb-6">
        <h1 className="text-2xl font-semibold">Todo App</h1>

        <p className="mt-1 text-sm text-gray-500">
          {completedCount} of {todos.length} completed
        </p>
      </header>

      <Input onAdd={handleAddTodo} />

      <TodoList
        todos={todos}
        onToggleTodo={handleToggleTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </section>
  );
};