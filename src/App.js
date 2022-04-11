import React,{useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import FormularioP from'./componentes/FormularioP.js';
import Tabla from'./componentes/Tabla.js';
//import {register} from './serviceWorkerRegistration.js';
import { useState } from 'react';
import Home from  './componentes/vistas/Home.js';
import Login from  './componentes/vistas/Login.js';
import Ua from  './componentes/vistas/UltraAdmin';
import app  from './firebase.js';
import messaging from './firebase.js';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';


function App() {

 



  const [data,setData]=useState([]);

  const retornoInfo=(infoTabla)=>{
   
    setData(infoTabla);
    
  }

  useEffect(() => {

    /* fetch("https://gortiz.site/ConexAndroid/pruebaPWA/API/registros.php").then(
      (res) => res.json()
    ).then((data)=>{
      console.log("Datos Obtenidos de la API");
      console.log(data);
      setData(data);
    }) */
    /* console.log(app)
    const messaging=app.initMessaging();
    messaging.requestPermission().then(()=>{
      return messaging.getToken();
    })
    .then(token=>{
      console.log("Token: ",token);
    })
    .catch(
      error=>{
        console.log(error);
      }
    ) */
   },[]);
 /*   console.log("Afuera-----------");
   console.log(data); */
  

  

  

  return (

    
    <Router>
     {/*  <div className="App">
          <ul className="App-header">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/ua">UltraAdmin</Link>
            </li>
        </ul>
      </div> */}
      <Routes>    
        <Route exact path='/ConexAndroid/pruebaPWA' element={< Home />}></Route>
        <Route exact path='/login' element={< Login />}></Route>
        <Route exact path='/ua' element={< Ua />}></Route>
      </Routes>

    </Router>
    
/*     <div className="App">
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
    </div> */
  );
}

export default App;
