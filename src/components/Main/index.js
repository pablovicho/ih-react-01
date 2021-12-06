// 1. IMPORTACIONES
import React from "react";
import Food from "./Food";
import Movies from "./Movies"  

// 2. FUNCIONES
function Main () {
const foodList = [
    "tamales",
    "tortas",
    "tacos"
]

const restaurantList = [
    {
        nombre:"McDonalds",
        platilloPrincipal:"Hamburguesas"
    },
    {
        nombre:"Pizza Hut",
        platilloPrincipal:"Pizza"
    },
    {
        nombre:"La casa de Toño",
        platilloPrincipal:"Taquitos de cochinita"
    }
]

const peliculas = [
    {
    nombre:"Fantastic Mr. Fox",
    director:"Wes Anderson"
},
{
    nombre:"Dune",
    director:"Denis Villeneuve"
}

]

    return(
        <>
        <Food list={foodList} restaurants={restaurantList}/>
        <hr/>
        <Movies list={peliculas}/>
        </>
        )
}

// 3. EXPORTACIONES
export default Main