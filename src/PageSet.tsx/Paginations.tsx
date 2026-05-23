import { useMemo, useState } from "react";

export const Paginations = ({
  count,
  setLimit,
  limit,
  setSkip,
  current,
  setCurrent,
}) => {
  const skips = [2, 4, 6, 8, 10, 20, 50, 100];
  const page = useMemo(() => {
    const tab = Math.ceil(count / limit);
    return Array.from({ length: tab }, (_, i) => i + 1);
  }, [limit]);

  return (
    <div className="flex gap-2 my-2 ">
      <select
        value={limit}
        onChange={(data) => {
          setCurrent(1);
          setSkip(0);
          setLimit(data.target.value);
        }}
        className="border-2 p-1 h-[35px]"
      >
        {skips.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
      <div>
        {page.map((item) => (
        <button
          className={`border-2 px-2 py-1 cursor-pointer mx-1 ${current === item && "bg-black text-white"}`}
          key={item}
          onClick={() => {
            setCurrent(item);
            setSkip((item - 1) * limit);
          }}
        >
          {item}
        </button>
      ))}
      </div>
    </div>
  );
};
