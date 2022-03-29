import React from 'react';
import { useState } from 'react';




function FormularioP() {

   // Declaración de una variable de estado que llamaremos "count"  const [count, setCount] = useState(0);
 const [palabra, setPalabra] = useState("");


  return (
    <div className="App">
        <form>
          <input  type="text" placeholder="Ingresa valor"/>
        </form>
       <button className=" btn-info mt-2" type="button" onClick={()=>{setPalabra(this.text)}}  >Guardar!</button> 
    </div>
    
  );

  function fprueba(){
 
    var htmlElement=document.getElementById("print");
    console.log(htmlElement);
  }
}




export default FormularioP;
