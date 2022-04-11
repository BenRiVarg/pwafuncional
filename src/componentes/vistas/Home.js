import React from 'react';
import { useState } from 'react';




function Home (){
    
    return (
    <div className="contenedor">
        <div className="frame">
        
           <iframe name="frame"
                title="Inline Frame Example"
                width="100%"
                height="100%"
                src="https://gortiz.site/AlmacenUp/vistas/login.html"
                id="frame" >
                
            </iframe>

        </div>

       {/*  <div className="navegacion">
           <Boton direccion={"https://www.gortiz.site/Almacen/vistas/login.html"} text="Almacen" />
           <Boton direccion={"https://www.gortiz.site/Almacen/vistas/login.html"} text="Iniciar Sesión" />
           <Boton direccion={"https://www.gortiz.site/Almacen/vistas/login.html"} text="Super Admin" /> 
        </div> */}
    </div>)
}
 
function Boton(props){

    function inIframe () {
        try {
            console.log("Ejecutandose");
            return window.self !== window.top;
        } catch (e) {
            return true;
        }
    }

    const redireccion=(e)=>{
      
       

        var botones=document.getElementsByClassName("navegacion")[0].children;
      
        for(var i=0;i<botones.length;i++){
            botones[i].className="";
            botones[i].className="button";
        }
       
        e.target.className="botonActivo";
        
        
        var botones=document.getElementsByClassName("navegacion")[0].children;

        inIframe();
       /*  var frame=document.getElementById("frame");
        console.log(frame.contentWindow.location.url); */
       

    }
    return (
        
    
       <a  className="button" href={props.direccion} target="frame" onClick={redireccion}>{props.text}</a>
       )
}


export default Home;