import { BinaryTree } from "../binary-tree"
import { TreeNode } from "../interfaces/tree_node"
import { node_Search } from "./node_search"


export class BinarySearchTree<T extends TreeNode<T>>{

    constructor(public stubTreeRoot: T) {

    }
    has(input: number) {
       return node_Search(input, this.stubTreeRoot)
    }
}