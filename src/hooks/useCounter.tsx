import React, { useState } from 'react'

const useCounter = (initialState: number = 0) => {
    
    const [counter, setCounter] = useState(initialState);

    const acumulate = (qty: number) => {
        setCounter(counter + qty)
    }
    
    return { counter, acumulate };

}

export default useCounter
