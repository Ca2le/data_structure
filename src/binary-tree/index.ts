import { TreeNode } from '../interfaces/tree_node'
import { check_Node_List } from './check_node_list'
import { create_A_BFS_List } from './create_A_BFS_List'
import { create_A_DFS_Inorder_List } from './create_A_DFS_Inorder_List'
import { create_A_DFS_Postorder_List } from './create_A_DFS_Postorder_List'
import { create_A_DFS_Preorder_List } from './create_A_DFS_Preorder_List'
import { expect_Node } from './expect_Node'
import { get_Value_List_From_Column } from './get_Value_List_From_Column'
import {Expected_Node_Type, CBType }from './types/Check_Node_List' 

//     10
//     / \
//    5   15
//   / \   \
//  3   7   20
//          / \
//         17  50

export class Traverse {
  static DFS_INORDER = 'DFS_INORDER'
  static DFS_PREORDER = 'DFS_PREORDER'
  static DFS_POSTORDER = 'DFS_POSTORDER'
  static BFS = 'BFS'
}


export class BinaryTree<T> {
  constructor(public stubTreeRoot: TreeNode<T>) {

  }
 
  traverse(input: string, cb:() =>{} ) {

    switch (input) {
      case 'DFS_INORDER': {
        const list = create_A_DFS_Inorder_List(this.stubTreeRoot)
        check_Node_List(list, cb)
      
        break
      }
      case 'DFS_PREORDER': {
        const list = create_A_DFS_Preorder_List(this.stubTreeRoot)
        check_Node_List(list, cb)
        break
      }
      case 'DFS_POSTORDER': {
        const list =  create_A_DFS_Postorder_List(this.stubTreeRoot)
        check_Node_List(list, cb)
        break
      }
      case 'BFS': {
        const list =  create_A_BFS_List(this.stubTreeRoot)
        check_Node_List(list, cb)
        break
      }
      default: throw new Error(`Invalid traverse: ${input}`)
    }

  }


  getColumn(input: number) {

    const value_list = get_Value_List_From_Column(input, this.stubTreeRoot)

    return value_list
  
  }
}
