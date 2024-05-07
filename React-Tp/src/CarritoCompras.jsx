function ItemCarrito({nombre, cantidad, precio}){
    const subT= precio * cantidad

    return(
        <div>
            <p>Nombre: {nombre}</p>
            <p>Precio: ${precio} x Cantidad: {cantidad} = Subtotal: {subT}</p>
        </div>
        
    )
}



function CarritoCompras(){
    const items=[

        {
            nombre: "Camisa cuadrille",
            precio: 100,
            cantidad: 23
         },
      {
        nombre: "Medias",
        precio: 55,
        cantidad: 200
      },
      {
        nombre: "Borcego",
        precio: 400,
        cantidad: 43
      }
    
    ];
    
    const totalGeneral= items.reduce((total, producto)=>{
        return total + (producto.precio * producto.cantidad);
    }, 0);

    return(
        <div>
            {items.map((producto, index) =>(
                 <div key= {index}>
                <ItemCarrito
                    nombre={producto.nombre}
                    precio={producto.precio}
                    cantidad={producto.cantidad}
                     />
           
        </div>
    ))}
        <p>Total: ${totalGeneral}</p>
    
    </div>

)}

export default CarritoCompras;

   

