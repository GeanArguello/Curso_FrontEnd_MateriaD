import React from 'react';
import Saludo from './components/Saludo/Saludo';
import Contador from './components/Contador/Contador';
import './App.css';

function App() {
  return (
    <div className="App">
      <Saludo name={'Gean'}/>
      <hr />
      <Contador/>

    </div>
  );
}

export default App;
