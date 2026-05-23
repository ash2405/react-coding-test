export const ProductItem = ({ item }) => {
  return (
    <div className="border-2 p-2 w-[330px]">
      <img src={item.thumbnail} />
      <p className="font-semibold">{item.title}</p>
      <p>${item.price}.00</p>
    </div>
  );
};
