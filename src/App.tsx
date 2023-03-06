import { BinaryTree, Traverse } from './binary-tree'
import React from 'react'
import { stubTreeRoot } from './utilities/stub_tree'
import { BinarySearchTree } from './binary-search-tree/'
import { expect_Node } from './binary-tree/expect_Node'

function App() {
  const tree = new BinaryTree(stubTreeRoot)
  // tree.traverse(Traverse.DFS_PREORDER, expect_Node)
  console.log(tree.getColumn(0))
  console.log(tree.getColumn(1))
  console.log(tree.getColumn(2))
  console.log(tree.getColumn(-1))
  console.log(tree.getColumn(-2))
  // const sTree = new BinarySearchTree(stubTreeRoot)
  // const isTen = sTree.has(10)
  // console.log(isTen)
  return (
    <div>
      <h1>Hello, world!</h1>
    </div>
  )
}

export default App
