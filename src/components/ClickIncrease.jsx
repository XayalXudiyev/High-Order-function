import React from 'react'
import WithCounter from './WithCounter'

const ClickIncrease = ({ count, increment }) => {

    return (
        <div>
            <button onClick={increment}>
                click increment
            </button>
            <p>{count}</p>
        </div>
    )
}

export default WithCounter(ClickIncrease)