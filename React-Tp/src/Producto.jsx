import azucar from './assets/img/AZUCAR-GRANULADA.jpg'

function Producto({nombre, precio}){
    return(
    <div className="Producto 1">
            <div className="imagen">
            <img src={azucar} alt={nombre} />
        </div>
        <h3>{nombre}</h3>
        <p>Precio: ${precio}</p>
    </div> 
    )
}

export default Producto;