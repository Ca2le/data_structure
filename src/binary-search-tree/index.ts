import { BinaryTree } from "../binary-tree"
import { TreeNode } from "../interfaces/tree_node"


export class BinarySearchTree<T extends TreeNode<T>>{

    constructor(public stubTreeRoot: T) {

    }
    has(input: number) {
        const nodeStack = [this.stubTreeRoot]
        const valueStack: Array<number> = []
        let i: number = 0
        let result = false

        while (nodeStack.length > 0) {
            let queue: number = 0
            
            if (nodeStack[i]) {

                if(nodeStack[i].value === input){
                    result = true
                    break;
                }

                if (nodeStack[i].right) {
                    nodeStack.push(nodeStack[i].right as T)
                    queue++
                    if (nodeStack[i].right?.value === input) {
                        result = true
                        break;
                    }
                }
                if (nodeStack[i].left) {
                    nodeStack.push(nodeStack[i].left as T)
                    queue++
                    if (nodeStack[i].left?.value === input) {
                        result = true
                        break;
                    }
                }
                if (nodeStack[i].value !== null) {
                    valueStack.push(nodeStack[i].value as number);
                    queue--
                    nodeStack.splice(i, 1)
                    i += queue
                }

            }
        }

        return result
    }
}