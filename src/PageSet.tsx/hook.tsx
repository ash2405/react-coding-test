import { useEffect, useState } from "react";

export const useGetProductList = (limit, skip) => {
  const [productList, setProductList] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState<any>();
  const [count, setCount] = useState(0);

  useEffect(() => {
    const getList = async () => {
      try {
        setLoader(true);
        const list = await fetch(
          `https://dummyjson.com/products?limit=${limit}&skip=${skip}`,
        );
        if (!list.ok) {
          setError("Internal Server Error.");
          throw new Error("Internal Server Error.");
        }
        const res = await list.json();
        setProductList(res.products);
        setCount(res.total);
      } catch (err) {
        setError(err);
      } finally {
        setLoader(false);
      }
    };
    getList();
  }, [limit , skip]);

  return { productList, loader, error, count };
};
