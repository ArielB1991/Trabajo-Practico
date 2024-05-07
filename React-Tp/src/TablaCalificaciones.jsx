function AlumnosJson({nombre, calificacion}){
  
    return(
      <div>
        <h3>Nombre: {nombre}</h3>
        <p>Nota: {calificacion}</p>
      </div>
    )
  }
  
  function TablaCalificaciones(){
  
    const alumnos = [
      {
          nombre: "Jose",
          calificacion: 8
          
      },
      {
          nombre: "Pedro",
          calificacion: 5
      },
      {
          nombre: "Yamila",
          calificacion: 8
      }
  ];
  return (
    <>
      <ul>
        {alumnos.map((alumno, index) => (
          <li key={index}>
            <AlumnosJson
              nombre={alumno.nombre}
              calificacion={alumno.calificacion}
              
            />
          </li>
        ))}
      </ul>
    </>
  );
  }
  
  export default TablaCalificaciones;