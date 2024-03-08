import { useState } from 'react';
import PropTypes from 'prop-types';

// componente funcional
const CounterApp = ({ value }) => {

  // aplicando hook
  const [counter, setCounter] = useState(value);

  // funcion contar
  const handleAdd = () => {
    setCounter(counter + 1);
  };
  // funcion restar
  const handleSubstract = () => {
    setCounter((counter) => counter - 1);
  };
  // funcion resetear
  const handleReset = () => {
    setCounter(value);
  };

  return (
    <>
      <h1>CounterApp</h1>
      <h2> {counter} </h2>

      <div className='contenedor-button'>
        <button className='button button-contar' onClick={handleAdd}>
          contar
        </button>
        <button className='button button-restar' onClick={handleSubstract}>
          restar
        </button>
        <button className='button button-reset' onClick={handleReset}>
          reset
        </button>
      </div>
    </>
  );
};
CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};
export default CounterApp;
