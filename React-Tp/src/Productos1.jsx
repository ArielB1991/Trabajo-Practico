function ProductosJson({nombre, precio, descripcion}){
  
  return(
    <div>
      <h3>{nombre}</h3>
      <p>{descripcion}</p>
      <p> ${precio}</p>
    </div>
  )
}

function Productos1(){

  const productos = [
    {
        nombre: "Yerba",
        precio: 1700,
        descripcion: "Yerba mate con palo"
    },
    {
        nombre: "Azucar",
        precio: 1000,
        descripcion: "Azucar refinada"
    },
    {
        nombre: "Cafe",
        precio: 4500,
        descripcion: "Cafe tostado"
    }
];
return (
  <>
    <ul>
      {productos.map((producto, index) => (
        <li key={index}>
          <ProductosJson
            nombre={producto.nombre}
            precio={producto.precio}
            descripcion={producto.descripcion}
          />
        </li>
      ))}
    </ul>
  </>
);
}

export default Productos1;