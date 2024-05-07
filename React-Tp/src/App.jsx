import './App.css'
import './Reloj'
import Reloj from './Reloj'
import Conversor from './Conversor';
import ListaUsuario from './ListaUsuario';
import Producto from './Producto';
import CalculadoraPropina from './CalculadoraPropina';
import Productos1 from './Productos1';
import ListaTareas from './ListaTareas';
import TablaCalificaciones from './TablaCalificaciones';
import CarritoCompras from './CarritoCompras';


function App() {
  const hora= 8;
  const minutos= 24;

  const usuarios= ["Luis", "Miguel", "Iara", "Monica"];

  
  return (
    <>
      <div>
        <h2>Ejercicio 1</h2>
        <h3>Hola Mundo!</h3>
      </div>
      <div>
        <h2>Ejercicio 2</h2>
      <Reloj hora={hora} minutos={minutos} />
      </div>
      <div>
          <h2>Ejercicio 3</h2>
        <Conversor celsius={15} />
      </div>
      <div>
        <h2>Ejercicio 4</h2>
        <ListaUsuario usuarios={usuarios} />
      </div>
      <div>
        <h2>Ejercicio 5</h2>
        <Producto nombre= "Azucar" precio={1200} imagenURL="https://images.app.goo.gl/qJ8GiFvDoyTziQ8e9"/>
      </div>
      <div>
        <h2>Ejercicio 6</h2>
        <CalculadoraPropina total={100} porcentajePropina={10} />
      </div>
      <div>
        <h2>Ejercicio 7</h2>
        <Productos1 />
      </div>
      <div>
        <h2>Ejercicio 8</h2>
      <ListaTareas />
      </div>
      <div>
        <h2>Ejercicio 9</h2>
        <TablaCalificaciones />
      </div>
      <div>
        <h2>Ejercicio 10</h2>
        <CarritoCompras producto={CarritoCompras}/>
      </div>
    </>
  )
}

export default App
