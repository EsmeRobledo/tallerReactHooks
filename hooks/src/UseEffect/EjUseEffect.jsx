import React, {useEffect, useLayoutEffect, useState} from 'react'
import axios from 'axios'

function EjUseEffect() {
    
const [data, setData] = useState("");
const [contador, setContador] = useState(0)

useEffect(() => {
   
},[])

useLayoutEffect(() => {
 
}, [])

function carga(){
    axios.get("https://jsonplaceholder.typicode.com/comments")
.then(response =>{
    setData(response.data[0].email)
    console.log(data);
})
}


  return (
    <>
        
        <h1>{data}</h1>
        <h1>{contador}</h1>
        <button onClick={() => {setContador(contador + 1)}}>Click</button>
    </>
  )
}

export default EjUseEffect