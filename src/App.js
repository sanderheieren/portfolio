import './App.css';
import React, {useRef, useEffect} from 'react'
import Canvas from './Canvas'

function App() {

  return (
    <div className="App">
      <header className="App-header">
      <h1>Hello, I'm Sander</h1>
      </header>
      <main>
        <p className="sub-text">I'm huge fan of the Fibonacci Sequence <br/>
        Take a look at my algorithmic flower generator
        </p>
      </main>
       <Canvas />
    </div>
  );
}

export default App;
