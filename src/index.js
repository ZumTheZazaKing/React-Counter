import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom';
import './style.css';

function App(){

  const [count, setCount] = useState(0);

  function increment(){
    setCount(count+1)
  }

  function decrement(){
    setCount(count-1)
  }

  return <div className="container">

    <p>{count}</p>
    <button onClick={decrement}>-</button>
    <button onClick={increment}>+</button>

  </div>

}


let el = <App />;

ReactDOM.render(el, document.getElementById('root'));

export default 'style';
