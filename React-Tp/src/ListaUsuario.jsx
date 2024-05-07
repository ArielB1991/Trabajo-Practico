function ListaUsuario({ usuarios }){

    return(
        <>
            
            <h1>Lista de Usuarios</h1>
            <ul>
                {usuarios.map((usuario, index)=>(
                    <li key={index}>{usuario}</li>
                ) 
                )}
            </ul>
        </>
    )
}

export default ListaUsuario