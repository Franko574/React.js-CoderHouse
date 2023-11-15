//1)Importamos las librerias React y ReactDOM


import React from "react";
//La libreria que define que es un componente y como los componentes funcionan juntos

import ReactDOM from "react-dom/client";
//la libreria que sabe como hacer que un componente aparezca en la pantalla del usuario
import App from "./App";
import {msj} from "./App";


//2)Obtener un refenrecia al div con id root
const el = document.getElementById("root");

console.log(msj);
//3)Le decimos a react que tome control del elemento
const root = ReactDOM.createRoot(el);

//4)Creamos un componente

function App(){
    let nombre = "Pepe";
    let apellido = "Lopez";
    let edad = 30;  
    

    //UTILIZAMOS {} para imprimir variables
    return (
        <div>            
            <h1>Bienvenido/a usuario: {nombre} {apellido}</h1>
            <p className="parrafos_rojos">Edad: {edad}</p>
            <label>Ingrese su dni</label>
            <input type="number" min={5} max={20} style={{color:"red", fontSize:"40px"}}/>
            <textarea autoFocus />
        </div>
    )
}


//5)Mostrar el componente en la pantalla del usuario
root.render(<App/>);