import _ from 'lodash'
import { TreeNode } from '../interfaces/tree_node'
import { Expect_Node_Type } from './types/Expect_Node_Type'

export function create_A_DFS_Inorder_List<T extends TreeNode<T>>(stubTreeRoot: TreeNode<T>) {

    const node_tree_clone = _.cloneDeep(stubTreeRoot)
    const node_stack = [node_tree_clone]
    const traversed_values = []
    let i: number = 0

    while (node_stack.length > 0) {
        let value: number = node_stack[i].value as number
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

    return traversed_values
    
}