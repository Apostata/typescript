import React, { StrictMode } from 'react';
import Contador from './components/Contador'
import './App.css'

const App: React.FC =() => {
  return (
    <StrictMode>
      <div className="App">
          <Contador valorInicial={9876} />
          <Contador />
      </div>
    </StrictMode>
  );
}

export default App;
