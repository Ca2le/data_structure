import { BinaryTree } from "../binary-tree"
import { TreeNode } from "../interfaces/tree_node"
import { search } from "./binary_search"


export class BinarySearchTree<T extends TreeNode>{
    stubTreeRoot
    constructor(stubTreeRoot: T) {
        this.stubTreeRoot = stubTreeRoot
    }


    has<U>(data: U) {
        const result = search(data, this.stubTreeRoot)
      
        return result
    }
}