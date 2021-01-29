import React from 'react'
import './header.css'
import Flower from '../FlowerCanvas/Flower'
import animate from '../FlowerCanvas/animate'
// import Particle from '../ParticlesCanvas/Particle'
// import animateParticle from '../ParticlesCanvas/animateParticle'
// import initParticle from '../ParticlesCanvas/initParticle'

const Header = () => {
  return (
    <>
    <div className="header">
    {/* <Particle animateParticle={animateParticle} initParticle={initParticle}/> */}
    <Flower animate={animate}/>
    </div>
    <div>
      Connect with me
    </div>
    </>
  )
}

export default Header;
