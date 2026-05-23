import { useGetFolder } from "./hooks";
import { TreeNodes } from "./Treenodes";
import { IoIosArrowForward } from "react-icons/io";
import { FaFileAlt } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { useCallback, useState } from "react";

export const createNode = (name) => {
  return {
    id: crypto.randomUUID(),
    name,
    isFolder: !name.includes("."),
    isOpen: false,
    children: [],
  };
};

export const openNode = (list, nodeID) => {
  console.log("list", list);
  console.log("nodeID", nodeID);
  return list.map((item) => {
    if (item.id === nodeID) {
      return {
        ...item,
        isOpen: !item.isOpen,
      };
    }
    return {
      ...item,
      children: openNode(item.children, nodeID),
    };
  });
};
export const updateTree = (filelist, node, parentID) => {
  return filelist?.map((item) => {
    if (item.id === parentID) {
      return {
        ...item,
        children: [...item.children, node],
      };
    }
    return {
      ...item,
      children: updateTree(item.children, node, parentID),
    };
  });
};
export const Files = () => {
  const filelist = useGetFolder();
  const [treeList, setTreeList] = useState(filelist);

  const addNode = useCallback((parentID) => {
    const name = prompt("enter the name");
    const node = createNode(name);

    setTreeList((pre) => [...updateTree(pre, node, parentID)]);
  }, []);

  const setOpen = useCallback((nodeID) => {
    setTreeList((pre) => [...openNode(pre, nodeID)]);
  }, []);
  return (
    <div className="ml-5">
      <TreeNodes nodes={treeList} addNode={addNode} setOpen={setOpen} />
    </div>
  );
};
