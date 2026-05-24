import { useGetFolder } from "./hooks";
import { TreeNodes } from "./Treenodes";
import { FaFileAlt } from "react-icons/fa";
import { useCallback, useState } from "react";
import { FaFolderOpen } from "react-icons/fa";

export const createNode = (name, isFolder) => {
  return {
    id: crypto.randomUUID(),
    name,
    isFolder: isFolder,
    isOpen: false,
    children: [],
  };
};

export const openNode = (list, nodeID) => {

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
export const updateTree = (filelist, node, nodeID) => {

  return filelist?.map((item) => {
    if (item.id === nodeID) {
      return {
        ...item,
        children: [...item.children, node],
      };
    }
    return {
      ...item,
      children: updateTree(item.children, node, nodeID),
    };
  });
};
export const Files = () => {
  const filelist = useGetFolder();
  const [treeList, setTreeList] = useState(filelist);
  const [nodeID, setNodeID] = useState("");

  const addNode = useCallback((isFolder) => {
    const name = prompt("enter the name");
    const node = createNode(name, isFolder);
    setTreeList((pre) => [...updateTree(pre, node, nodeID)]);
    setTimeout(() => {
      setNodeID('')
    }, 300);
  }, [nodeID]);


  const setOpen = useCallback((nodeID) => {
    setTreeList((pre) => [...openNode(pre, nodeID)]);
  }, []);
  return (
    <div className="ml-5">
      <div className="flex  my-4 w-[200px] align-middle">
        <p className="flex-2">File Explorer</p>
        {nodeID && (
          <>
            <FaFileAlt
              className="m-2 cursor-pointer"
              onClick={() => addNode(false)}
            />
            <FaFolderOpen
              className=" m-2 cursor-pointer"
              onClick={() => addNode(true)}
            />
          </>
        )}
      </div>
      <TreeNodes
        nodes={treeList}
        addNode={setNodeID}
        nodeID={nodeID}
        setOpen={setOpen}
      />
    </div>
  );
};
