import React, { useEffect } from 'react'

export const MyButton = ( {onClick, children} ) => {
    console.log(`Esto dentro del componente button de ${children}`)
    /*
    El hook useEffect es utilizada para trabajar con efectos secundarios
    en componentes funcionales
    Podemos controlar las acciones que ocurren después de que el componente
    se renderiza, como realizar llamadas a APIs, suscripciones a eventos
    manipulación del DOM

    sintaxis

    useEffect( () =>, []  )
    
    */
    

   useEffect( () => {
    console.log(`Esto dentro del useEffect de ${children}`)

    },[]);
  return (
        
        <>
            <button onClick={onClick} style={ {color:'red', fontFamily:'verdana', fontSize:30} }>{children}</button>
        </>
        
    
  )
}
