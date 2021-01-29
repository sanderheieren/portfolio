import React from 'react'
import useCanvas from './useCanvas'
import './canvas.css'


const Particle = props => {

  const {animateParticle, initParticle, ...rest} = props;
  const canvasRef = useCanvas(animateParticle, initParticle); 

  return (
    <div> 
      <div className="canvas-container">
        <canvas id="canvas1" ref={canvasRef} {...rest} /> 
        {/* ref={canvasRef} {...rest} */}
        <h1 className="title">Sander Heieren</h1>
      </div>
    </div>
  )
}

export default Particle
