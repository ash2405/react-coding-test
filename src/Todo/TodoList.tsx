// TodoList.tsx
import type { TodoItem } from ".";
import { TodoCard } from "./TodoItem";

interface TodoListProps {
  todos: TodoItem[];
  onToggleTodo: (id: string) => void;
  onDeleteTodo: (id: string) => void;
}

export const TodoList = ({
  todos,
  onToggleTodo,
  onDeleteTodo,
}: TodoListProps) => {
  if (todos.length === 0) {
    return (
      <div className="mt-6 rounded-lg border border-dashed p-6 text-center text-sm text-gray-500">
        No todos added yet.
      </div>
    );
  }

  return (
    <div className="mt-6 space-y-3">
      {todos.map((todo) => (
        <TodoCard
          key={todo.id}
          todo={todo}
          onToggleTodo={onToggleTodo}
          onDeleteTodo={onDeleteTodo}
        />
      ))}
    </div>
  );
};