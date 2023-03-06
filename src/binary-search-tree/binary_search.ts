import { TreeNode } from "../interfaces/tree_node"

export function search<T, U extends TreeNode>(data: T, root: U) {

    const nodeStack: Array<U> = [root]
    const valueStack: Array<number> = []
    let i: number = 0
    let result = false

    while (nodeStack.length > 0) {
        let queue: number = 0

        if (nodeStack[i]) {
            if (nodeStack[i].right) {
                nodeStack.push(nodeStack[i].right as U)
                queue++
                if(nodeStack[i].right?.value === data){
                    result = true
                    break;
                }
            }
            if (nodeStack[i].left) {
                nodeStack.push(nodeStack[i].left as U)
                queue++
                if(nodeStack[i].left?.value === data){
                    result = true
                    break;
                }
            }
            valueStack.push(nodeStack[i].value as number);
            queue--
            nodeStack.splice(i, 1)
            i += queue
        }
    }

    return result
}