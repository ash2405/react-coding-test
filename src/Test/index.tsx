import { useMemo, useState } from "react";
import { useGetList } from "./hook";
import { Table } from "./Table";
import { Input } from "./Input";
import type { Users } from "./hook";
import { Form } from "./Form";

export const Test = () => {
  const { data, err, loader, setData } = useGetList();

  const [input, setInput] = useState<string>("");
  const [show, setShow] = useState<boolean>(false);

  const filteredUsers = useMemo(() => {
    const search = input.toLowerCase();

    return data.filter((item: Users) => {
      return (
        item.name?.toLowerCase().includes(search) ||
        item.email?.toLowerCase().includes(search) ||
        item.address?.city?.toLowerCase().includes(search)
      );
    });
  }, [data, input]);

  return (
    <div className="min-h-screen flex justify-center p-4">
      {loader ? (
        <h1 className="text-xl font-bold">Loading...</h1>
      ) : err ? (
        <h1 className="text-red-500">{err}</h1>
      ) : (
        <div className="w-full max-w-3xl">
          <div className="flex justify-between gap-4 mb-4">
            <Input setInput={setInput} />

            <button
              className="border px-4 py-2 rounded-md hover:bg-gray-100"
              onClick={() => setShow(true)}
            >
              Add
            </button>
          </div>

          {show && <Form setData={setData} setShow={setShow} />}

          <Table userList={filteredUsers} />
        </div>
      )}
    </div>
  );
};