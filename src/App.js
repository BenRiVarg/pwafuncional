import React from 'react';
import logo from './logo.svg';
import './App.css';
import FormularioP from'./componentes/FormularioP.js';
import Tabla from'./componentes/Tabla.js';
//import {register} from './serviceWorkerRegistration.js';
import { useState } from 'react';
function App() {

  const info=[
    { id:1, nombre: "Prueba"},
    { id:2, nombre: "Prueba2"}
  ];

  
  const [data,setData]=useState(info);

  const retornoInfo=(infoTabla)=>{
    
    setData(infoTabla);
    
  }
  

  

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
    
      
        <Tabla datos={data}  setGlobal={retornoInfo}/>
      </header>
    </div>
  );
}

export default App;
