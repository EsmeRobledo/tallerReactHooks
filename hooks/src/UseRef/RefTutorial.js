import React, { useRef } from "react";

function RefTutorial() {
  const inputRef = useRef(null);
  //Este hook va a realizar la funcion determinada que haciamos con el 
  //document.getElementbyId donde obteniamos valor, asignabamos el focus o bien
  /**Limpiabamos el valore despues de que el campo fue usardo
   * use ref se usa para remplazar el control de doom de html con js
   */
  const onClick = () => {
    console.log(inputRef.current.value)
    /**Este ejemplo hace que la referencia ponga el cursor en el input
     * al momento de que le de click al boton
     */
    inputRef.current.focus()

    /**en este ejemplo estamos limpiando el valor del elemento referido
     * en este caso el input 
     */
    inputRef.current.value = "";
  };
  return (
    <div>
      <h1>Pedro</h1>
      <input type="text" placeholder="Ex..." ref={inputRef} />
      <button onClick={onClick}>Change Name</button>
    </div>
  );
}

export default RefTutorial;


/**Si quieres realizar el focus para manupular un elemento
 * es algo parecido a lo que haciamos con el document.getElemetbyID
 * en este caso usando un hook vamos a accessar a este elemento
 * en especifico
 */