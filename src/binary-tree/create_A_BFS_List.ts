import _ from 'lodash'

export function create_A_BFS_List<T>(stubTreeRoot: T) {
    const node_tree_clone: any = _.cloneDeep(stubTreeRoot)
    const node_stack: any[] = [node_tree_clone]
    const traversed_values = []
    let i: number = 0

    let value: any = { value: node_stack[i].value}

      while (node_stack.length > 0) {
        if (node_stack[i]?.left) {
          node_stack.unshift(node_stack[i].left)
          i++
        }
        if (node_stack[i]?.right) {
          node_stack.unshift(node_stack[i].right)
          i++
        }

        traversed_values.push(value)
        node_stack.pop()
        i--
      }
      return traversed_values
}