import React from 'react'
import WithCounter from './WithCounter'

const HoverIncrease = ({ count, increment }) => {

    return (
        <div>
            <button onMouseOver={increment}>
               hover increment
            </button>
            <p>{count}</p>
        </div>
    )
}

export default WithCounter(HoverIncrease)