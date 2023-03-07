import { TreeNode } from 'interfaces/tree_node'
import _ from 'lodash'

export function create_A_DFS_Preorder_List<T extends TreeNode<T>>(stubTreeRoot: T) {
    const node_tree_clone = _.cloneDeep(stubTreeRoot)
    const node_stack = [node_tree_clone]
    const traversed_values = []
    let i: number = 0

    while (node_stack.length > 0) {
        let queue = 0
        let value = node_stack[i].value as number
        
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
    return traversed_values
    
}
