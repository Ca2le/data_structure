import { TreeNode } from "../interfaces/tree_node";

export const stubTreeRoot: TreeNode = {
    value: 10,
    left: {
      value: 5,
      left: { value: 3 },
      right: { value: 7 },
    },
    right: {
      value: 15,
      right: {
        value: 20,
        left: { value: 17 },
        right: { value: 50 },
      },
    },
  }