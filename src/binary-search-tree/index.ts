import { BinaryTree } from "../binary-tree"
import { TreeNode } from "../interfaces/tree_node"
import { search_For_Column } from "./search_for_column"


export class BinarySearchTree<T extends TreeNode<T>>{

    constructor(public stubTreeRoot: T) {

    }
    has(input: number) {
        search_For_Column(input, this.stubTreeRoot)
    }
}