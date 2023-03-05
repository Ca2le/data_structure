import { TreeNode } from '../interfaces/tree_node'
import _ from 'lodash'

function traverse_Values<T extends TreeNode>(tree: T, traverse: string) {
  const node_tree_clone: T = _.cloneDeep(tree)

  const node_stack: T[] = [node_tree_clone]

  const traversed_values = []

  let i: number = 0

  if (traverse === 'DFS_PREORDER') {
    while (node_stack.length > 0) {
      let queue: number = 0
      let value = { value: node_stack[i].value }
      if (node_stack[i]) {
        if (node_stack[i].right) {
          node_stack.push(node_stack[i].right as T)
          queue++
        }
        if (node_stack[i].left) {
          node_stack.push(node_stack[i].left as T)
          queue++
        }
        traversed_values.push(value)
        queue--
        node_stack.splice(i, 1)
        i += queue
      }
    }
    if (traversed_values) {
      return traversed_values
    }
  }

  if (traverse === 'DFS_INORDER') {
    while (node_stack.length > 0) {
      let value = { value: node_stack[i].value }
      // If left child node exists and have not been visited.
      if (node_stack[i].left && node_stack[i].left?.value !== null) {
        node_stack.push(node_stack[i].left as T)
        i++
        continue
      }
      // If right child node exists.
      if (node_stack[i].right) {
        node_stack.push(node_stack[i].right as T)
        traversed_values.push(value)
        node_stack[i].value = null
        node_stack.splice(i, 1)
        continue
      }
      // If child nodes dont exsist or have been visited.
      if (!node_stack[i].left?.value && !node_stack[i].right?.value) {
        traversed_values.push(value)
        node_stack[i].value = null
        node_stack.splice(i, 1)
        i--
        continue
      } else console.log('We got some problem')
    }

    if (traversed_values) {
      return traversed_values
    }
  }
  // // IT SHOULD TRAVERS 3x ON EACH NODE
  if (traverse === 'DFS_POSTORDER') {
    while (node_stack.length > 0) {
      let value = { value: node_stack[i].value }
      if (node_stack[i]?.left?.value) {
        node_stack.push(node_stack[i].left as T)
        i++
        continue
      }
      if (node_stack[i]?.right?.value) {
        node_stack.push(node_stack[i].right as T)
        i++
        continue
      } else {
        traversed_values.push(value)
        node_stack[i].value = null
        node_stack.splice(i, 1)
        i--
        continue
      }
    }
    if (traversed_values) {
      return traversed_values
    }
  }
  if (traverse === 'BFS') {
    let value = { value: node_stack[i].value }
    while (node_stack.length > 0) {
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
    if (traversed_values) {
      return traversed_values
    }
  }
}
export default traverse_Values
