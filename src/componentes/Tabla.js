import React from 'react';
import { useState } from 'react';
import {Modal,ModalBody,ModalHeader,ModalFooter} from 'reactstrap'



function Tabla( props) {

    const [datos,setDatos]=useState(props.datos);
    

    const [modalEditar,setMD]=useState(false);
    const [modalInsertar,setMI]=useState(false);
    const [modalBorrar,setMB]=useState(false);
    const [elemento,setElemento]=useState(
        {
            id:'',
            nombre: ''
         }
    )

    const accionElemento=(elemento,caso)=>{
        setElemento(elemento);
        (caso==="Editar")? setMD(true):setMB(true);
    }
    

    const handlecChange = e=>{

       
         const {name,value}=e.target;
        setElemento((prevEstate)=>({
            ...prevEstate,
            [name]:value
        }));
        


    }

    const crear=()=>{
        setElemento(  {
            id:'',
            nombre: ''
            }   
    );
        setMI(true);
    }

    const insertar=()=>{
        var elementoInsertar=elemento;
        elementoInsertar.id=parseInt(datos[datos.length-1].id)+1;
        var dataNueva=datos;
        dataNueva.push(elementoInsertar);
        setDatos(datos)
        setMI(false);
    }


    const editar=()=>{
        var dataNueva=datos;
        datos.map( registros=>{
            if(registros.id === elemento.id){
                registros.nombre=elemento.nombre;
            }
        })
        props.setGlobal(dataNueva);
        setMD(false);
    }

    const eliminar=()=>{
        
        setDatos(datos.filter(registros=>registros.id!== elemento.id));

        props.setGlobal(datos);
        setMB(false);
    }


  return (
 
    <div >
        <button className="btn btn-success" onClick={()=>crear()}> Crear </button>

       <table className="table table-bordered">
           <thead>
               <tr>
                   <th className="text-white">id</th>
                   <th className="text-white">Nombre</th>
                   <th className="text-white"  colspan="2" >Acciones</th>
               </tr>
              
           
           </thead>
           <tbody>
               { datos.map((elemento)=>
                     <tr>
                        <td className="text-white">{elemento.id}</td>
                        <td className="text-white">{elemento.nombre}</td>
                        <td> <button type="button" class="btn btn-warning" id={elemento.id}  onClick={()=>accionElemento(elemento,"Editar")}>Modificar</button> </td>
                        <td><button type="button" class="btn btn-danger"   id={elemento.id}  onClick={()=>accionElemento(elemento,"Eliminar")}>Eliminar</button></td>
                    </tr> 
                )
                    }

               </tbody>
       </table>
    
    
       <Modal isOpen={modalInsertar} >
            <ModalHeader>
                <div><h1 className="primary"> Insertar Registro</h1></div>
            </ModalHeader>
            <ModalBody>
                <div className="form group">
                        <label>Nombre: </label>
                        <input className="form-group"
                        
                        type="text"
                        name="nombre"
                        value={elemento ? elemento.nombre:''}
                        onChange={handlecChange}/>
                </div>
            </ModalBody>
            <ModalFooter>
                <button className="btn btn-success pr-1" onClick={()=>insertar()}>Insertar</button>
                <button className="btn btn-danger"      onClick={()=>setMI(false)}>Cancelar</button>
            </ModalFooter>
        </Modal>

       <Modal isOpen={modalEditar} >
            <ModalHeader>
                <div><h1 className="primary"> Modificar Registro</h1></div>
            </ModalHeader>
            <ModalBody>
                <div className="form group">
                        <label>Nombre: </label>
                        <input className="form-group"
                        
                        type="text"
                        name="nombre"
                        value={elemento && elemento.nombre}
                        onChange={handlecChange}/>
                </div>
            </ModalBody>
            <ModalFooter>
                <button className="btn btn-warning pr-1" onClick={()=>editar()} >Modificar</button>
                <button className="btn btn-danger" onClick={()=>setMD(false)}>Cancelar</button>
            </ModalFooter>
        </Modal>
        
        
        <Modal isOpen={modalBorrar} >
            <ModalHeader>
                <div><h1 className="text-danger"> Eliminar Registro</h1></div>
            </ModalHeader>
            <ModalBody>
                <div className="form group">
                        <label>¿Estas seguro de borrar este Registro {elemento.nombre}? </label>
                        <br></br>
                        <button className="btn btn-danger pr-1" onClick={()=>eliminar()}>Sí</button>
                        <button className="btn btn-info" onClick={()=>setMB(false)}>No</button>
                </div>
            </ModalBody>
          
        </Modal>


    </div>
    
  );

 
}


export default Tabla;
