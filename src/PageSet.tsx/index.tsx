import { useState } from "react"
import { useGetProductList } from "./hook"
import { Paginations } from "./Paginations"
import { Products } from "./Products"

export const PageSet = ()=>{
    const [limit,setLimit] = useState(10)
    const [skip,setSkip] = useState(0)
      const [current, setCurrent] = useState(1);
    
    const {productList,loader,error,count} = useGetProductList(limit,skip)

    return (
      <div className="w-fit h-fit grid place-content-center p-2">
        {loader ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <Paginations
              count={count}
              setLimit={setLimit}
              limit={limit}
              setSkip={setSkip}
              current={current} 
              setCurrent={setCurrent}
            />
            <Products detail={productList} />
          </>
        )}
      </div>
    );
}