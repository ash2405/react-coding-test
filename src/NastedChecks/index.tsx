import { useEffect, useState } from "react";
import { Checks } from "./Checks";
import { useGetChecks } from "./hooks";


type CheckItem = {
  id: string;
  name: string;
  isCheck: boolean;
  child: CheckItem[];
};
const updateChild = (item : CheckItem[], checked : boolean) => {
  return item.map((val) => {
    val = {
      ...val,
      isCheck: checked,
      child: [...updateChild(val.child, checked)],
    };

    return val;
  });
};

const addChecks = (checks:CheckItem[], id:string, checked:boolean) => {
  return checks.map((item, index) => {
    if (item.id === id) {
      item = {
        ...item,
        isCheck: checked,
        child: [...updateChild(item.child, checked)],
      };
    } else {
      item = {
        ...item,
        child: [...addChecks(item.child, id, checked)],
      };
    }

    return item;
  });
};

export const NastedChecks = () => {
  const list = useGetChecks();
  const [checkList, setCheckList] = useState([...list]);

  //   useEffect(() => {
  //     setCheckList([...list]);
  //   }, [list]);

  const setChecks = (checked: boolean, id: string) => {
      setCheckList((pre) => addChecks(pre, id, checked))
  };
  return (
    <>
      <Checks checkItem={checkList} setChecks={setChecks} />
    </>
  );
};
