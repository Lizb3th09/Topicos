


const calificaciones=[
    7.3,6.9,4.2,8.5,9.3,7.0
 ]


 const newcalificaciones = calificaciones.map((calificacion) => {

    const aprobado = calificacion> 7.0;
    const reprobado = calificacion < 7.0;
  
    return  aprobado, reprobado 
  });
  
  console.log(newcalificaciones);