import './App.css';
import React from 'react'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import About from './components/About/About'

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <About />
    </div>
  );
}

export default App;
