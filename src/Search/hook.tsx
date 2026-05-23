import { useEffect, useRef, useState } from "react";

export const useGetList = (search: string) => {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);
  const [err, setErr] = useState("");

  // cache persists without causing re-renders
  const cacheRef = useRef({});

  useEffect(() => {
    // avoid unnecessary API call
    if (!search.trim()) {
      setData([]);
      return;
    }

    const controller = new AbortController();

    const getData = async () => {
      try {
        setLoader(true);
        setErr("");

        // cache hit
        if (cacheRef.current[search]) {
          setData(cacheRef.current[search]);
          return;
        }

        const response = await fetch(
          `https://dummyjson.com/users/search?q=${search}`,
          {
            signal: controller.signal,
          },
        );

        if (!response.ok) {
          throw new Error("API issue!");
        }

        const result = await response.json();

        // store in cache
        cacheRef.current[search] = result.users;

        setData(result.users);
      } catch (error) {
        // ignore aborted requests
        if (error.name === "AbortError") return;

        setErr(error.message || "Something went wrong");
      } finally {
        setLoader(false);
      }
    };

    getData();

    // cleanup old request
    return () => controller.abort();
  }, [search]);

  return { data, loader, err };
};