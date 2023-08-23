import React from 'react'

//const studentName = "Tania";

/*
Los datos pasadoc como props los recibimos como un objeto
en un parámetro de la función 


desestructuracion: obtener las claves de un objeto, para hacer asignaciones menos complejas
{ name, url } = props;
*/

 const Student = ( {info, children} ) => {
     
  return (
    <>
    
        <a href= {info.url} target='_blank'>
          <h4>{info.name}</h4>
        </a>
        <p>Ex-alumno:{info.isGraduate ? ' Si' : ' No'}</p>
        <p>{children}</p>
    
    </>
    
  )
}


export default Student 