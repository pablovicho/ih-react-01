// IMPORTACIONES
import React from 'react'

export default function Movies(props) {
    const list = props.list
    return (
        // este <> se llama fragmento, que elimina el div. por regla, siempre pasaremos un fragmento
        <> 
        <h1>Hola soy una peli</h1>
        {
                        list.map((e, index) => {
                            return(
                                <div key={index}>
                                <p>La película se llama: {e.nombre} y su director es: {e.director}</p>
                                </div>
                            )
                        })
                    }
            
        </>
        // solo puede haber una etiqueta padre por componente. adentro de esta, lo que quieras
    )
}