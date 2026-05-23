// Files.jsx

import { useCallback, useState } from "react";
import { TreeNode } from "./TreeNode";
import { useGetFolder } from "./hooks";

/**
 * =========================
 * Helpers
 * =========================
 */

export const createNode = (name) => ({
  id: crypto.randomUUID(),
  name: name.trim(),
  isFolder: !name.includes("."),
  isOpen: false,
  children: [],
});

/**
 * Optimized recursive update
 * Stops traversal once node found
 */

const updateNode = (tree, nodeId, updater) => {
  let isUpdated = false;

  const traverse = (nodes) => {
    return nodes.map((node) => {
      if (isUpdated) return node;

      if (node.id === nodeId) {
        isUpdated = true;
        return updater(node);
      }

      if (node.children?.length) {
        const updatedChildren = traverse(node.children);

        if (updatedChildren !== node.children) {
          return {
            ...node,
            children: updatedChildren,
          };
        }
      }

      return node;
    });
  };

  return traverse(tree);
};

export const FileExplorer = () => {
  const initialTree = useGetFolder();

  const [tree, setTree] = useState(initialTree);

  /**
   * Toggle folder
   */

  const toggleNode = useCallback((nodeId) => {
    setTree((prevTree) =>
      updateNode(prevTree, nodeId, (node) => ({
        ...node,
        isOpen: !node.isOpen,
      }))
    );
  }, []);

  /**
   * Add child node
   */

  const addNode = useCallback((parentId) => {
    const name = prompt("Enter file/folder name");

    if (!name?.trim()) return;

    const newNode = createNode(name);

    setTree((prevTree) =>
      updateNode(prevTree, parentId, (node) => ({
        ...node,
        children: [...node.children, newNode],
      }))
    );
  }, []);

  return (
    <div className="ml-4 text-sm">
      <TreeNode
        nodes={tree}
        toggleNode={toggleNode}
        addNode={addNode}
      />
    </div>
  );
};