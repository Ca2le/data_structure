import { TreeNode } from '../interfaces/tree_node'
import getColumnArr from '../utilities/get_column'
import traverse_tree from '../utilities/node_to_array'

//     10
//     / \
//    5   15
//   / \   \
//  3   7   20
//          / \
//         17  50

export class BinaryTree {
  constructor(public stubTreeRoot: TreeNode) {}

  getNodeValue(value: number) {
    console.log({ value })
    return { value }
  }

  traverse<T>(input: string, getNodeValue: (value: any) => T) {
 
    const traversed_tree_values = traverse_tree(this.stubTreeRoot, input)

    if (traversed_tree_values) {
      for (let i = 0; i < traversed_tree_values.length; i++) {
        getNodeValue(traversed_tree_values[i])
      }
    }

    //       function drinkEach(drink, drinks) {
    //   for (let i = 0; i < drinks.length; i++) {
    //     drink(drinks[i]);
    //   }
    // }
  }
  getColumn(input: number) {
    getColumnArr(this.stubTreeRoot, input)
  }
}
export class Traverse {
  static DFS_INORDER = 'DFS_INORDER'
  static DFS_PREORDER = 'DFS_PREORDER'
  static DFS_POSTORDER = 'DFS_POSTORDER'
  static BFS = 'BFS_BREADTH'
}

[
  { value: 3 },
  { value: 5 },
  { value: 7 },
  { value: 10 },
  { value: 15 },
  { value: 17 },
  { value: 20 },
  { value: 50 },
]
