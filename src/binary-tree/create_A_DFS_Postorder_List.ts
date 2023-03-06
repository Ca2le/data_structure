import _ from 'lodash'

export function create_A_DFS_Postorder_List<T>(stubTreeRoot: T) {
    const node_tree_clone: any = _.cloneDeep(stubTreeRoot)
    const node_stack: any[] = [node_tree_clone]
    const traversed_values = []
    let i: number = 0

    while (node_stack.length > 0) {
        let value: number = node_stack[i].value
        if (node_stack[i]?.left?.value) {
          node_stack.push(node_stack[i].left)
          i++
          continue
        }
        if (node_stack[i]?.right?.value) {
          node_stack.push(node_stack[i].right)
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
      return traversed_values
}