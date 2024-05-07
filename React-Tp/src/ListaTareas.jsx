function Tareas({descripcion, estado}){
    return(
        <div>
        <p>{descripcion}</p>
        <p>Estado: {estado}</p>
        </div>
    )}



function ListaTareas(){

    const tareas= [
        {   
            descripcion: "Salir a correr",
            estado: "Completada"
        },
        {
            descripcion: "Entregar la tarea",
            estado: "Completada"
        },
        {
            descripcion: "Presentar informe",
            estado: "Pendiente"
        }
    ];

    return(
        <>
        <h2>Lista de tareas</h2>
        {tareas.map((tarea, index) =>(
            <div key={index}>
            <Tareas 
                descripcion={tarea.descripcion}
                estado={tarea.estado}
                />
                </div>
              ))}
        </>
    )
}
    
export default ListaTareas