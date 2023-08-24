import React from 'react'
import {useState} from 'react'
import { MyButton } from '../button/my-button'

export const Counter = () => {

    
    //let counterValue = 100;

    //hook useState
    //const [ value, setValue ] = useState( initialValue )
    //useState permite a los componentes gestionar su propia estado
    

    const [ counterValue, setCounter ] = useState( 100 ) //useState retorna 2 valores, el valor incial y un arreglo

    const handleIncrement = (e) =>{
       // console.log(e);
        console.log('Estoy en fnc Increment');
        setCounter(counterValue + 1)
        console.log('Contador: ' + counterValue);
        
    }
    const handleDecrement = (e) =>{
        //console.log(e);
        console.log('Estoy en fnc Decrement');
        setCounter(counterValue - 1)
        console.log('Contador: ' + counterValue);
    }
    const resetValue = (e) =>{
        //console.log(e);
        counterValue = 100;
        console.log(counterValue);
    }

  return (
    <>
    <p>Contador: {counterValue}</p>
    <MyButton onClick={ handleDecrement } name="Decrementar">Decrementar</MyButton>
    <MyButton onClick={ handleIncrement } name="Incrementar">Incrementar</MyButton>
    <MyButton onClick={ (event) => { setCounter(100) } } name="reset">Reset</MyButton>
    {/* <button onClick={ handleDecrement }>Decrementar</button>
    <button onClick={ handleIncrement }>Incrementar</button>
    <button onClick={ (event) => { setCounter(100) } }>Reset</button> */}
    </>
  )
}


