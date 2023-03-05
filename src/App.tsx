import { BinaryTree, Traverse } from './binary-tree'
import React from 'react'
import { stubTreeRoot } from './utilities/stub_tree'

function App() {
  const tree = new BinaryTree(stubTreeRoot)
  tree.traverse(Traverse.DFS_INORDER, tree.getNodeValue)
  return (
    <div>
      <h1>Hello, world!</h1>
    </div>
  )
}

export default App
