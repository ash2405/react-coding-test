interface Props {
  setInput: React.Dispatch<React.SetStateAction<string>>;
}

export const Input = ({ setInput }: Props) => {
  return (
    <input
      type="text"
      placeholder="Search user..."
      className="w-full max-w-md border-2 rounded-md p-2"
      onChange={(event) => setInput(event.target.value)}
    />
  );
};