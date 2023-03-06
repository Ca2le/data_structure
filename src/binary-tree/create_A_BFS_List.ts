import { TreeNode } from 'interfaces/tree_node'
import _ from 'lodash'

export function create_A_BFS_List<T extends TreeNode<T>>(stubTreeRoot: T) {
  const node_tree_clone = _.cloneDeep(stubTreeRoot)
  const node_stack = [node_tree_clone]
  const traversed_values = []
  let i: number = 0


  while (node_stack.length > 0) {

    let value = node_stack[i].value as number
    if (node_stack[i]?.left) {
      node_stack.unshift(node_stack[i].left as T)
      i++
    }
    if (node_stack[i]?.right) {
      node_stack.unshift(node_stack[i].right as T)
      i++
    }

    traversed_values.push(value)
    node_stack.pop()
    i--
  }
  return traversed_values
}