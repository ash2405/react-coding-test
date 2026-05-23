import { ProductItem } from "./ProductItem";

export const Products = ({ detail }) => {
  return (
    <>
      {detail?.length === 0 ? (
        <h1>No data found!</h1>
      ) : (
        <div className="grid grid-cols-4 gap-3">
          {detail?.map((item, index) => (
            <ProductItem key={index} item={item} />
          ))}
        </div>
      )}
    </>
  );
};
