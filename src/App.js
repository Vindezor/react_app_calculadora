import './App.css';
import Boton from './components/Boton';
import BotonClear from './components/BotonClear';
import Pantalla from './components/Pantalla';
import freeCodeCampLogo from './images/af-logo.png'
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('');

  const agregarInput = val => {
    setInput(input + val);
  };

  const clearInput = val => {
    setInput('');
  }

  const calcularResultado = () => {
    if(input){
      setInput(evaluate(input));
    } else {
      alert("Por favor ingrese valores para reliazar los calculos");
    }
  };

  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img
          className='freecodecamp-logo'
          src={freeCodeCampLogo}
          alt='Logo de freeCodeCamp'/>
      </div>
      <div className='contenedor-calculadora'>
        <Pantalla input={input}/>
        <div className='fila'>
          <Boton manejarInput={agregarInput}>1</Boton>
          <Boton manejarInput={agregarInput}>2</Boton>
          <Boton manejarInput={agregarInput}>3</Boton>
          <Boton manejarInput={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarInput={agregarInput}>4</Boton>
          <Boton manejarInput={agregarInput}>5</Boton>
          <Boton manejarInput={agregarInput}>6</Boton>
          <Boton manejarInput={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarInput={agregarInput}>7</Boton>
          <Boton manejarInput={agregarInput}>8</Boton>
          <Boton manejarInput={agregarInput}>9</Boton>
          <Boton manejarInput={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarInput={calcularResultado}>=</Boton>
          <Boton manejarInput={agregarInput}>0</Boton>
          <Boton manejarInput={agregarInput}>.</Boton>
          <Boton manejarInput={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClear={clearInput}/>
        </div>
      </div>
    </div>
  );
}

export default App;
