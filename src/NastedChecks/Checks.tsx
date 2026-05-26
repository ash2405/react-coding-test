
export const Checks = ({ checkItem, setChecks }) => {
  return (
    <>
      {checkItem?.map((item) => (
        <>
          <div className="ml-2 my-2" key={item.id}>
       <div className="cursor-pointer"  onClick={(e) => {
                setChecks(!item.isCheck, item.id);
              }}>
             <input
              type="checkbox"
              checked={item?.isCheck}
              className="w-[15px] h-[15px] mr-2"
             
            />
            {item?.name}
       </div>

            {item?.child?.length > 0 && (
              <Checks checkItem={item.child} setChecks={setChecks} />
            )}
          </div>
        </>
      ))}
    </>
  );
};
