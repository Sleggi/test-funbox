import React from 'react';
import Card from './components/Card'

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="header">
          <h1 className='title'>Ты сегодня покормил кота?</h1>
        </div>
        <div className="cards">
          <Card />
        </div>
      </div>
    </div>


  );
}

export default App;
