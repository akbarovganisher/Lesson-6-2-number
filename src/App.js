import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="box">
      <span className='number'>{count}</span>
      <div className='buttons-box'>
        <button className='add' id='add' onClick={() => setCount(count + 1)}>+</button>
        <button className='remove' id='remove' onClick={() => setCount(count - 1)}>-</button>
        <button className='reset' id='reset' onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
}

export default App;