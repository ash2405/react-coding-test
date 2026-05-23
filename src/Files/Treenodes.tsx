import { IoIosArrowForward } from "react-icons/io";
import { FaFileAlt } from "react-icons/fa";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

export const TreeNodes = ({ nodes, addNode, setOpen }) => {
  return (
    <div className="ml-5">
       {nodes?.map((node, index) => (
        <>
          <div className="flex gap-2 mt-1">
            {node.isFolder && !node.isOpen && (
              <IoIosArrowForward
                className="mt-1.5"
                onClick={() => setOpen(node.id)}
              />
            )}
            {node.isFolder && node.isOpen && (
              <FaChevronDown
                className="mt-1.5"
                onClick={() => setOpen(node.id)}
              />
            )}
            {node.name}
            {node.isFolder && (
              <FaFileAlt className="mt-2" onClick={() => addNode(node.id)} />
            )}
          </div>
          {node.isOpen && <TreeNodes nodes={node.children} addNode={addNode} setOpen={setOpen}/>}
        </>
      ))}
    </div>
  );
};
