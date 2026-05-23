import { useEffect, useRef, useState } from "react";
import { useGetList } from "./hook";

export const Search = () => {
  const [, setInput] = useState("");
  const [search, setSearch] = useState("");

  const { data, loader } = useGetList(search);

  const timerRef = useRef();

  const handleInput = (value) => {
    setInput(value);

    clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      setSearch(value);
    }, 500);
  };

  // cleanup timer on unmount
  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  return (
    <div className="w-[100vw] h-[100vh] grid place-content-center">
      <input
        type="text"
        value={input}
        onChange={(e) => handleInput(e.target.value)}
        placeholder="Search users..."
        className="border-2 p-2 w-[400px] rounded-t-md outline-none"
      />

      {!loader && search !== "" && (
        <div className="border-2 border-t-none p-2 max-h-[300px] overflow-scroll">
          {data.length > 0 ? (
            data.map((item) => (
              <p className="p-2" key={item.id}>
                {item.firstName}
              </p>
            ))
          ) : (
            <p className="p-2">No users found</p>
          )}
        </div>
      )}

      {loader && (
        <div className="border-2 border-t-none p-2">
          Loading...
        </div>
      )}
    </div>
  );
};