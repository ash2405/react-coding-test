// Input.tsx
import { useCallback, useState, type KeyboardEvent } from "react";

interface InputProps {
  onAdd: (title: string) => void;
}

export const Input = ({ onAdd }: InputProps) => {
  const [value, setValue] = useState("");

  const handleAdd = useCallback(() => {
    const trimmedValue = value.trim();

    if (!trimmedValue) {
      return;
    }

    onAdd(trimmedValue);
    setValue("");
  }, [onAdd, value]);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "Enter") {
        handleAdd();
      }
    },
    [handleAdd],
  );

  return (
    <div className="flex gap-3">
      <label className="sr-only" htmlFor="todo-input">
        Add Todo
      </label>

      <input
        id="todo-input"
        type="text"
        value={value}
        placeholder="Add a new task..."
        className="w-full rounded-lg border px-4 py-2 outline-none transition focus:ring-2 focus:ring-blue-400"
        onChange={(event) => setValue(event.target.value)}
        onKeyDown={handleKeyDown}
      />

      <button
        type="button"
        onClick={handleAdd}
        className="rounded-lg bg-blue-500 px-4 py-2 font-medium text-white transition hover:bg-blue-600"
      >
        Add
      </button>
    </div>
  );
};