import { useState } from "react";

export const Chip = () => {
  const [chip, setChip] = useState<string[]>([]);
  const [input, setInput] = useState<string>("");

  return (
    <div className="w-[600px] bg-amber-200 text-center">
      <h1 className="text-2xl text-center font-bold"> Chip Form</h1>
      <input
        type="text"
        value={input}
        name="name"
        className="border-2 pl-2 p-2 rounded-md w-[300px] h-[30px] m-5 mt-2"
        onChange={($event) => {
          setInput($event.target?.value);
        }}
        onKeyUp={($event) => {
          if ($event.key === "Enter") {
            if (input.trim() !== "") {
              setChip((pre) => [...pre, input]);
              setInput("");
            }
          }
        }}
      />
      <div className="mt-6 flex gap-2 max-w-[600px] flex-wrap">
        {chip?.map((item, index) => (
          <div
            className="mx-2 bg-gray-500 p-2 rounded-md  flex justify-between gap-2"
            key={index}
          >
            <p>{item}</p>
            <p
              className="text-[6px] text-white bg-red-500 p-1 rounded-2xl  cursor-pointer"
              onClick={() =>
              {  console.log(index)
                setChip((pre) => {
                    let item = [...pre]
                  item.splice(index, 1);
                  return item;
                })}
              }
            >
              X
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
