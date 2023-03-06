import _ from 'lodash'

export function create_A_DFS_Preorder_List<T>(stubTreeRoot: T) {
    const node_tree_clone: any = _.cloneDeep(stubTreeRoot)
    const node_stack: any[] = [node_tree_clone]
    const traversed_values = []
    let i: number = 0

    while (node_stack.length > 0) {
        let queue: number = 0
        let value: number = node_stack[i].value

        if (node_stack[i]) {
            if (node_stack[i].right) {
                node_stack.push(node_stack[i].right as any)
                queue++
            }
            if (node_stack[i].left) {
                node_stack.push(node_stack[i].left as any)
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
