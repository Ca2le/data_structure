import { TreeNode } from "interfaces/tree_node";
import _ from "lodash";

function set_current_column(path_list: Array<number>) {
    const current = path_list.reduce((a, b) => a + b, 0)
    return current
}

export function get_Value_List_From_Column<T extends TreeNode<T>>(input: number, stubTreeRoot: T) {
    const tree_root_clone = _.cloneDeep(stubTreeRoot)
    const node_stack = [tree_root_clone]
    const column_list: Array<number> = []
    const path_list: Array<number> = [0]
    let i: number = 0
    let current_node: T
    let current_column: number
    const left = -1
    const right = 1
    console.log(node_stack)
    while (node_stack.length > 0) {
        current_node = node_stack[i]
        current_column = set_current_column(path_list)

        if (current_column === input && current_node.value) {
            column_list.push(current_node.value)
        }

        if (!node_stack[i]?.left?.value && !node_stack[i]?.right?.value) {
            node_stack[i].value = null
            node_stack.pop()
            path_list.pop()
            i--

        } else {

            if (node_stack[i]?.left?.value) {
                node_stack[i].value = null
                node_stack.push(node_stack[i].left as T)
                i++
                path_list.push(left)
                continue
            }
            if (node_stack[i]?.right?.value) {
                node_stack[i].value = null
                node_stack.push(node_stack[i].right as T)
                i++
                path_list.push(right)
                continue
            }

        }
    }

    return column_list
}