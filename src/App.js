import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';


function App() {

  const [count, setCount] = useState(0);
  
  const Increment = ()=>{

    return(
        setCount(count+1)
    );    
  }
  const Restart = ()=>{
    return setCount(0); 
  }
  const Decrement = ()=>{
    setCount(count - 1); 
  }

  return (
    <div className="App">
    
     <h1 data-testid="heading" >Dummy React App</h1><br></br>
     <h1>Count: {count}</h1>
     <button onClick={Increment}>Increment</button>
     <button onClick={Restart}>Refresh</button>
     <button onClick={Decrement}>DECREMENT</button>


    </div>
  );
}

export default App;
