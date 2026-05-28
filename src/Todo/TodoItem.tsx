// TodoCard.tsx
import { memo } from "react";
import type { TodoItem } from ".";

interface TodoCardProps {
  todo: TodoItem;
  onToggleTodo: (id: string) => void;
  onDeleteTodo: (id: string) => void;
}

export const TodoCard = memo(
  ({
    todo,
    onToggleTodo,
    onDeleteTodo,
  }: TodoCardProps) => {
    return (
      <article className="flex items-center justify-between rounded-xl border bg-white px-4 py-3 shadow-sm">
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onToggleTodo(todo.id)}
            aria-label={`Mark ${todo.title} as completed`}
          />

          <p
            className={
              todo.completed
                ? "text-gray-400 line-through"
                : "text-gray-800"
            }
          >
            {todo.title}
          </p>
        </div>

        <button
          type="button"
          aria-label={`Delete ${todo.title}`}
          onClick={() => onDeleteTodo(todo.id)}
          className="rounded-md bg-red-500 px-3 py-1 text-sm font-medium text-white transition hover:bg-red-600"
        >
          Delete
        </button>
      </article>
    );
  },
);

TodoCard.displayName = "TodoCard";