import { useState } from "react";




const Contador = () => {

    const [counter, setCounter] = useState(0);

    const acumulate = (qty: number) => {
        setCounter(counter + qty)
    }
    

    return (
        <>
            <h3>Contador <small>{counter}</small> </h3>
            <button className='btn btn-primary' onClick={()=>acumulate(1)}>+1</button>
            &nbsp;
            <button className='btn btn-primary' onClick={()=>acumulate(-1)}>-1</button>
        </>
    )
}

export default Contador
