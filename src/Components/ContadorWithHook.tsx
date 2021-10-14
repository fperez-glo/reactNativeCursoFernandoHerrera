import useCounter from "../hooks/useCounter";




const ContadorWithHook = () => {

    const {counter, acumulate} = useCounter();

    return (
        <>
            <h3>Contador con hook <small>{counter}</small> </h3>
            <button className='btn btn-primary' onClick={()=>acumulate(1)}>+1</button>
            &nbsp;
            <button className='btn btn-primary' onClick={()=>acumulate(-1)}>-1</button>
        </>
    )
}

export default ContadorWithHook
