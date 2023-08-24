import React from 'react'
import {useState, useEffect} from 'react'
import { MyButton } from '../button/my-button'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import RestartAltIcon from '@mui/icons-material/RestartAlt';

let maxValue = 0;
export const Counter = () => {

  console.log(`Esto dentro del componente counter`);
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
    
    if(counterValue === 90){
      maxValue = 90
    }

    useEffect( () => {
      console.log(`Esto dentro del useEffect de button`)
      console.log(`has llegao al maximo valor`)
  
      },[90]);

  return (
    <>
    <p className='title'>Contador: {counterValue}</p>
    <div className="button-container">
      <ButtonGroup variant="outlined" aria-label="outlined button group" color='secondary'>
        <Button onClick={ handleDecrement } size='large' startIcon={<RemoveCircleOutlineIcon />}>One</Button>
        <Button onClick={ handleIncrement } size='large' startIcon={<AddCircleOutlineIcon />}>Two</Button>
        <Button onClick={ (event) => { setCounter(100) } } size='large'endIcon={<RestartAltIcon />}>Three</Button>
      </ButtonGroup>
      {/* <MyButton className="button-increment" onClick={ handleDecrement }>Decrementar</MyButton>
      <MyButton className="button-decrement" onClick={ handleIncrement }>Incrementar</MyButton>
      <MyButton className="button-reset" onClick={ (event) => { setCounter(100) } }>Reset</MyButton> */}

    </div>
    </>
  )
}
{/* <button onClick={ handleDecrement }>Decrementar</button>
<button onClick={ handleIncrement }>Incrementar</button>
<button onClick={ (event) => { setCounter(100) } }>Reset</button> */}


