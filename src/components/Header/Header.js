import React from 'react'
import './header.css'
import Canvas from '../FlowerCanvas/Canvas'
import animate from '../FlowerCanvas/animate'

const Header = () => {
  return (
    <>
    <div className="header">
      <h1>Hello, I'm Sander</h1>
    <Canvas animate={animate}/>
    </div>
    </>
  )
}

export default Header;
