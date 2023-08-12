import React, {useReducer, useState} from 'react'

function EjempReducer() {
function reducer(state, action){
    switch(action.type){
        case "INCREMENTAR":
            return {contador: state.contador + 1, muestraTxt: state.muestraTxt}
        case "SHOWTEXT":
            return {contador: state.contador, muestraTxt: !state.muestraTxt}   
    }
}

    // const [contador, setContador] = useState(0);
    // const [muestraTxt, setMuestraTxt] = useState(false);
    const [state, setState] = useReducer(reducer, {contador: 0, muestraTxt: false})
  return (
    <>
        <h1>{state.contador}</h1>
        <button onClick={() =>{ 
        setState({type : "INCREMENTAR"}); 
        setState({type : "SHOWTEXT"})
        }}>Cuenta</button>
            {/* true */}
        {state.muestraTxt && <p>"Este es el texto a mostrar"</p>}
        {state.muestraTxt ? <p>"Este es el texto a mostrar"</p> : <p></p>}
    </>
  )
}

export default EjempReducer