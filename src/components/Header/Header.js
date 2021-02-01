import React, {useState} from 'react';
import './header.css'
import Flower from '../FlowerCanvas/Flower'
import animate from '../FlowerCanvas/animate'
import Me from './Me'
// import Particle from '../ParticlesCanvas/Particle'
// import animateParticle from '../ParticlesCanvas/animateParticle'
// import initParticle from '../ParticlesCanvas/initParticle'

const Header = () => {
    const [generate, setGenerate] = useState(false);
    
    const restart = () => {
    setGenerate(!generate)
  }
  return (
    <>
    <div className="header">
    {/* <Particle animateParticle={animateParticle} initParticle={initParticle}/> */}
    <Me />
    <Flower animate={animate} restart={restart} generate={generate}/>
    </div>
    </>
  )
}

export default Header;
