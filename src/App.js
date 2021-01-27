import './App.css';
import React from 'react'
import Canvas from './components/FlowerCanvas/Canvas'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import animate from './components/FlowerCanvas/animate'

function App() {

  return (
    <div className="App">
      <Nav />
      <Header />
       <Canvas animate={animate}/>
       <Canvas animate={animate}/>
    </div>
  );
}

export default App;
