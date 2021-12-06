// 1. IMPORTACIONES
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'

// 2. FUNCIÓN
function App() { // función declarativa
  // MANEJO DE VARIABLES Y OTRAS FUNCIONES
  const bootcamp = "Ironhack"
  return (
    //este formato es simultáneamente html y js: jsx
    //para insertar js se inscribe dentro de las llaves
      <div className="App">
        <Header nombre="Mike" ciudad="Veracruz"/> 
        <p>Hola Mundo</p>
        <p>Pablo Valdés</p>
        <p>Multiplicación: {12*12}</p>
        <p>Bootcamp: {bootcamp}</p>
        <hr/>

{/* nombre es un argumento, que se pasa al parámetro props en Header.js */}
{/* <Header nombre="Sam" ciudad="Edomex"/>
<Header nombre="K'onhin" ciudad="Hidalgo"/> */}

<hr />

<Main/>

<Footer pelicula="Pie pequeño: en busca del valle perdido"/>
      </div>
    );
  }

// 3. EXPORTACIÓN
export default App;

//cada componente que hagamos tiene que tener estas tres partes