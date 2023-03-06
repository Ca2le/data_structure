import { TreeNode } from '../interfaces/tree_node'
import traverse_tree from '../utilities/node_to_array'

//     10
//     / \
//    5   15
//   / \   \
//  3   7   20
//          / \
//         17  50

export class BinaryTree {
  constructor(public stubTreeRoot: TreeNode) { }

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

  set_current_column(path_list: Array<number>){
    const current = path_list.reduce((a, b) => a + b, 0)
    return current
  }

  getColumn(input: number) {

    const node_stack: TreeNode[] = [this.stubTreeRoot]
    const column_list: Array<number> = []
    const path_list: Array<number> = [0]
    let i: number = 0
    let current_node: TreeNode = this.stubTreeRoot
    let current_column: number
    const left = -1
    const right = 1

    while (node_stack.length > 0) {
      current_node = node_stack[i]
      current_column = this.set_current_column(path_list)

      if (current_column === input && current_node.value) {
        column_list.push(current_node.value as number)
      }

      if (!node_stack[i]?.left?.value && !node_stack[i]?.right?.value) {
        node_stack[i].value = null
        node_stack.pop()
        path_list.pop()
        i--

      } else {

        if (node_stack[i]?.left?.value) {
          node_stack[i].value = null
          node_stack.push(node_stack[i].left as TreeNode)
          i++
          path_list.push(left)
          continue
        }
        if (node_stack[i]?.right?.value) {
          node_stack[i].value = null
          node_stack.push(node_stack[i].right as TreeNode)
          i++
          path_list.push(right)
          continue

        }


      }
    }
  }
}
export class Traverse {
  static DFS_INORDER = 'DFS_INORDER'
  static DFS_PREORDER = 'DFS_PREORDER'
  static DFS_POSTORDER = 'DFS_POSTORDER'
  static BFS = 'BFS'
}

