import React, { CSSProperties } from 'react'
import { stubTreeRoot } from 'utilities/stub_tree'
import Node from './node.component'
import './styles/node_tree.styles.css'


function Node_Tree() {
    const node_tree = [10, 5, 15, 3, 7, 20, 17, 50]


    return (
        <div className='background'>
            {node_tree.map((e, i) => {
                return <Node value={e} id={`ID${i}`} />
            })}
        </div>
    )
}

export default Node_Tree