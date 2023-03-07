import React from 'react'
import './styles/node.styles.css'

interface INode {
    value: number,
    id: string
}


function Node({ value, id }: INode) {



    return (
        <div className='node-container' id={id}>
            <div className='node-outer'>
                <div className='node-inner'>
                    <p className='value'>{value}</p>
                </div>
            </div>
        </div>
    )
}

export default Node