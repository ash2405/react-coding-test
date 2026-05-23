import { useEffect, useState } from "react";

export interface Address {
  city?: string;
}

export interface Users {
  id?: number;
  name?: string;
  email?: string;
  address?: Address;
}

export const useGetList = () => {
  const [data, setData] = useState<Users[]>([]);
  const [loader, setLoader] = useState<boolean>(false);
  const [err, setErr] = useState<string>("");

  useEffect(() => {
    const getData = async () => {
      try {
        setLoader(true);

        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
          throw new Error("API issue!");
        }

        const result: Users[] = await response.json();

        setData(result);
      } catch (error: unknown) {
        if (error instanceof Error) {
          setErr(error.message);
        } else {
          setErr("Something went wrong");
        }
      } finally {
        setLoader(false);
      }
    };

    getData();
  }, []);

  return { data, err, loader, setData };
};