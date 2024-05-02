import React from 'react'
import { useState } from 'react'

const WithCounter = (OriginalComponent) => {

    const NewComponent = () => {
        const [count, setCount] = useState(0)
        return (
            <OriginalComponent
                count={count}
                increment={() => setCount(count + 1)}
            />
        )
    }

    return NewComponent
}

export default WithCounter