import React, {useState} from 'react'

function StateCount() {
   const [contador, setContador] = useState(0);

    function incrementar (){
        setContador(contador+1);
    }

  return (
    <>
        <h1>{contador}</h1>
        <button onClick={incrementar}>Incrementar</button>
    </>
  )
}

export default StateCount