import React, {useState} from 'react'

function StateField() {
    const [inputV, setInputV] = useState("Esmeralda");
    const [form, setForm] = useState({
        nombre : "",
        direccion: "",
        edad: ""
    });
 function onChange(event){
    const valorText = event.target.value;
    setInputV(valorText);
    //Para el form
  setForm({...form,[event.target.name]:event.target.value})
  console.log(form);
 }
  return (
    <>
        <input type="text" onChange={onChange} />
        <p>{inputV}</p>

        <form action="submit">
        <input type="text" name='nombre' onChange={onChange} value={form.nombre}/>
        <input type="text" name='direccion' onChange={onChange} value={form.direccion}/>
        <input type="text" name='edad' onChange={onChange} value={form.edad}/>
        </form>
    </>
  )
}

export default StateField