import CounterApp from './CounterApp';

const App = () => {
  return (
    <>
      <div className='contenedor'>
        <CounterApp value={0} />
      </div>
    </>
  );
};

export default App;
