import { useState } from "react";

const Contador = () => {
  const [counter, setCounter] = useState(0);

  const acumulate = (value: number) => {
    setCounter(counter + value);
  };

  return (
    <div>
      <h1>
        Contador <small>{counter}</small>
      </h1>

      <button className="btn btn-primary" onClick={() => acumulate(1)}>
        +1
      </button>
      <button className="btn btn-primary" onClick={() => acumulate(-1)}>
        -1
      </button>
    </div>
  );
};

export default Contador;
