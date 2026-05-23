// TreeNode.jsx

import { memo } from "react";

import { IoIosArrowForward } from "react-icons/io";
import { FaChevronDown } from "react-icons/fa";
import { FaFolder, FaFileAlt } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";

export const TreeNode = memo(
  ({ nodes, toggleNode, addNode }) => {
    return (
      <div className="ml-4">
        {nodes?.map((node) => {
          const isFolder = node.isFolder;

          return (
            <div key={node.id}>
              {/* Node Row */}
              <div className="flex items-center gap-2 mt-1 group">
                {/* Expand / Collapse */}
                {isFolder ? (
                  node.isOpen ? (
                    <FaChevronDown
                      className="cursor-pointer text-sm"
                      onClick={() => toggleNode(node.id)}
                    />
                  ) : (
                    <IoIosArrowForward
                      className="cursor-pointer text-sm"
                      onClick={() => toggleNode(node.id)}
                    />
                  )
                ) : (
                  <div className="w-[14px]" />
                )}

                {/* Icon */}
                {isFolder ? (
                  <FaFolder className="text-yellow-500" />
                ) : (
                  <FaFileAlt className="text-gray-500" />
                )}

                {/* Name */}
                <span
                  className="select-none cursor-pointer"
                  onClick={() =>
                    isFolder && toggleNode(node.id)
                  }
                >
                  {node.name}
                </span>

                {/* Actions */}
                {isFolder && (
                  <button
                    className="opacity-0 group-hover:opacity-100 transition"
                    onClick={() => addNode(node.id)}
                  >
                    <FiPlus />
                  </button>
                )}
              </div>

              {/* Recursive Children */}
              {isFolder &&
                node.isOpen &&
                node.children?.length > 0 && (
                  <TreeNode
                    nodes={node.children}
                    toggleNode={toggleNode}
                    addNode={addNode}
                  />
                )}
            </div>
          );
        })}
      </div>
    );
  }
);

TreeNode.displayName = "TreeNode";