// import { TreeNode } from "interfaces/tree_node"

// export function node_Search<T extends TreeNode<T>>(input: number, stubTreeRoot: T) {
//     const nodeStack = [stubTreeRoot]
//     const valueStack: Array<number> = []
//     let i: number = 0

//     while (nodeStack.length > 0) {
//         let queue: number = 0
//         const currentNode = nodeStack.pop() as T

//         if (nodeStack[i].value === input) {
//             return true
//         }

//         if (nodeStack[i].right) {
//             nodeStack.push(nodeStack[i].right as T)
//             queue++
//             if (nodeStack[i].right?.value === input) {
//                 return true
           
//             }
//         }
//         if (nodeStack[i].left) {
//             nodeStack.push(nodeStack[i].left as T)
//             queue++
//             if (nodeStack[i].left?.value === input) {
//                 return true
                
//             }
//         }
//         if (nodeStack[i].value !== null) {
//             valueStack.push(nodeStack[i].value as number);
//             queue--
//             nodeStack.splice(i, 1)
//             i += queue
//         }
//     }

//     return false
// }

import { TreeNode } from "interfaces/tree_node"

export function node_Search<T extends TreeNode<T>>(input: number, stubTreeRoot: T) {
    const nodeStack = [stubTreeRoot]

    while (nodeStack.length > 0) {
        const currentNode = nodeStack.pop() as T

        if (currentNode.value === input) {
            return true
        }

        if (currentNode.right) {
            nodeStack.push(currentNode.right as T)
        }
        if (currentNode.left) {
            nodeStack.push(currentNode.left as T)
        }
        
    }

    return false
}