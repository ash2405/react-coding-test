import { IoIosArrowForward } from "react-icons/io";
import { FaFileAlt } from "react-icons/fa";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

export const TreeNodes = ({ nodes, addNode, setOpen, nodeID }) => {
  return (
    <div className="ml-5">
      {nodes?.map((node, index) => (
        <>
          <div className={`flex gap-2 mt-1 w-[300px] ${nodeID === node.id && 'bg-gray-400 border-black p-2 text-white'}`}>
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
            <p className="cursor-pointer" onClick={() => addNode(node.id)}>
              
              {node.name}
            </p>
            {/* {node.isFolder && (
              <FaFileAlt className="mt-2" onClick={() => addNode(node.id)} />
            )} */}
          </div>
          {node.isOpen && (
            <TreeNodes
              nodes={node.children}
              addNode={addNode}
              nodeID={nodeID}
              setOpen={setOpen}
            />
          )}
        </>
      ))}
    </div>
  );
};
