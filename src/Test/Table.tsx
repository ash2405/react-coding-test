import { useMemo, useState } from "react";
import type { Users } from "./hook";

interface Props {
  userList: Users[];
}

type SortOrder = "asc" | "desc";

export const Table = ({ userList }: Props) => {
  const [sortField, setSortField] = useState<string>("name");
  const [sortOrder, setSortOrder] = useState<SortOrder>("asc");

  const handleSort = (field: string) => {
    setSortField(field);

    setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
  };

  const getNestedValue = (item: Users, path: string): string => {
    return (
      path
        .split(".")
        .reduce<any>((acc, key) => acc?.[key], item) || ""
    );
  };

  const sortedList = useMemo(() => {
    const clonedList = [...userList];

    return clonedList.sort((a, b) => {
      const first = getNestedValue(a, sortField);
      const second = getNestedValue(b, sortField);

      const result = first.localeCompare(second);

      return sortOrder === "asc" ? result : -result;
    });
  }, [userList, sortField, sortOrder]);

  return (
    <div className="overflow-auto">
      <table className="w-full border-collapse mt-4">
        <thead>
          <tr>
            <th
              className="border p-2 cursor-pointer"
              onClick={() => handleSort("name")}
            >
              Name
            </th>

            <th
              className="border p-2 cursor-pointer"
              onClick={() => handleSort("email")}
            >
              Email
            </th>

            <th
              className="border p-2 cursor-pointer"
              onClick={() => handleSort("address.city")}
            >
              City
            </th>
          </tr>
        </thead>

        <tbody>
          {sortedList.length === 0 ? (
            <tr>
              <td colSpan={3} className="border p-4 text-center font-bold">
                No Data Found!
              </td>
            </tr>
          ) : (
            sortedList.map((item) => (
              <tr key={item.id}>
                <td className="border p-2">{item.name}</td>
                <td className="border p-2">{item.email}</td>
                <td className="border p-2">{item.address?.city}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};