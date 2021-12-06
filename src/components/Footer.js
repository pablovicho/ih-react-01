// 1. IMPORTACIONES
import React from "react";

// 2. FUNCIÓN
//const Header = () => {} de expresión
function Footer (props) {
    console.log(props)
    return(
        
        <p>Soy el piecito. <br/>
        mi película favorita: <br/>
         {props.pelicula} </p>
    )
}

// 3. EXPORTACIONES
export default Footer
//module.exports = Header, o exports.Header