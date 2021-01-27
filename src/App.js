import './App.css';
import React, {useRef, useEffect} from 'react'
import Canvas from './components/Canvas/Canvas'
import animate from './components/Canvas/animate'

function App() {

  return (
    <div className="App">
      <header className="App-header">
      <h1>Hello, I'm Sander</h1>
      </header>
      <main>
        <p className="sub-text">I'm huge fan of the Fibonacci Sequence <br/>
        Take a look at this algorithmic flower generator
        </p>
      </main>
       <Canvas animate={animate}/>
    </div>
  );
}

export default App;
