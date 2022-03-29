import React,{useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import FormularioP from'./componentes/FormularioP.js';
import Tabla from'./componentes/Tabla.js';
//import {register} from './serviceWorkerRegistration.js';
import { useState } from 'react';

const axios = require('axios').default;

function App() {

 


/* const dataURL= async ()=>{
    
 

  let data= await new Promise ((resolver, rechazar) => {

        // Make a request for a user with a given ID
              axios.get('https://gortiz.site/ConexAndroid/pruebaPWA/API/registros.php')
              .then(function (response) {
                // handle success
                //console.log(response.data);
                resolver(response.data);
              })
              .catch(function (error) {
                // handle error
                console.log(error);
              })
              .then(function () {
                // always executed
              });

  })

  return data;
  
} */

/* const pdata= await dataURL();
console.log(pdata); */


  const [data,setData]=useState([]);

  const retornoInfo=(infoTabla)=>{
   
    setData(infoTabla);
    
  }

  useEffect(() => {

    fetch("https://gortiz.site/ConexAndroid/pruebaPWA/API/registros.php").then(
      (res) => res.json()
    ).then((data)=>{
      console.log("Datos Obtenidos de la API");
      console.log(data);
      setData(data);
    })
  /*   // Make a request for a user with a given ID
    axios.get('https://gortiz.site/ConexAndroid/pruebaPWA/API/registros.php')
    .then(function (response) {
      // handle success
      //console.log(response.data);
      setData(response.data);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    }); */

 /*      const info=[
    { id:1, nombre: "Prueba"},
    { id:2, nombre: "Prueba2"}
  ]; */
 /*  axios.get('https://gortiz.site/ConexAndroid/pruebaPWA/API/registros.php')
  .then(function (response) {
    // handle success
    console.log(response.data);
    setData(response.data);

  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
 
  console.log("Ejecutandose"); */

   },[]);
   console.log("Afuera-----------");
   console.log(data);
  

  

  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        { data.length>0 ?
         (<Tabla datos={data}  setGlobal={retornoInfo}/> ):<p>No hay datos</p>}
      </header>
    </div>
  );
}

export default App;
