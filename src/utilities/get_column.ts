// expect(tree.getColumn(0)).toEqual([10, 7])
// expect(tree.getColumn(1)).toEqual([15, 17])
// expect(tree.getColumn(2)).toEqual([20])
// expect(tree.getColumn(-1)).toEqual([5])
// expect(tree.getColumn(-2)).toEqual([3])

import { TreeNode } from "../interfaces/tree_node";

const set_current_column = (path_list: Array<number>) => {
   const current = path_list.reduce( (a, b) => a + b, 0 )
   return current

}

function getColumnArr<T extends TreeNode<T>>(root: T, input: number) {
    const node_stack = [root]
    const column_list: Array<number> = []
    const path_list: Array<number> = [0]
    let i: number = 0
    let current_node = root
    let current_column: number
    const left = -1
    const right = 1
   
    //     10
    //     / \ 
    //    5   15
    //   / \   \
    //  3   7   20
    //          / \
    //         17  50

    while (node_stack.length > 0) {
        current_node = node_stack[i]
        current_column = set_current_column(path_list)

        if (current_column === input && current_node.value) {
            column_list.push(current_node.value as number)
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




}


export default getColumnArr



    //     let currentNode = node_stack[i]
    //     let queue: number = 0

    //     let leftColumn = leftTravers.column
    //     let leftValue = leftTravers.value
    //     let rightColumn = rightTravers.column
    //     let rightValue = rightTravers.value

    //     if (currentNode.value) {

    //         // if (currentNodePosition === input) {
    //         //     inputSearchStack.push(currentNode.value as number);
    //         // }
    //         if (currentNode?.right?.value) {
    //             nodeStack.push(nodeStack[i].right as TreeNode)
    //             queue++
    //             //If current node is on the right tree side or at top / root
    //             if (currentNode.right.value >= rootValue) {
    //                 //Move to the right
    //                 rightColumn++
    //                 rightValue = currentNode.right.value
    //                 if (rightColumn === input) {
    //                     inputSearchStack.push(rightValue);
    //                 }
    //             }
    //             //If current node is on the left tree side
    //             if (currentNode.right.value < rootValue) {
    //                 //Move to the right
    //                 leftColumn++
    //                 leftValue = currentNode.right.value
    //                 if (leftColumn === input) {
    //                     inputSearchStack.push(leftValue);
    //                 }
    //             }
    //         }
    //         if (currentNode?.left?.value) {
    //             nodeStack.push(nodeStack[i].left as TreeNode)
    //             queue++
    //             //If current node is on the right tree side or at top / root
    //             if (currentNode.left.value >= rootValue) {
    //                 //Move to the left
    //                 rightColumn--
    //                 rightValue = currentNode.left.value
    //                 if (rightColumn === input) {
    //                     inputSearchStack.push(rightValue);
    //                 }

    //             }
    //             //If current node is on the left tree side
    //             if (currentNode.left.value < rootValue) {
    //                 //Move to the left
    //                 leftColumn--
    //                 leftValue = currentNode.left.value
    //                 if (leftColumn === input) {
    //                     inputSearchStack.push(leftValue);
    //                 }
    //             }
    //         }


    //         leftTravers.value += leftValue
    //         rightTravers.value += rightValue

    //         queue--
    //         nodeStack.splice(i, 1)
    //         i += queue
    //     }


        // console.log(nodeStack[i].value, currentNodePos)
