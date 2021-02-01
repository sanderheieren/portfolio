import React from 'react';
import useCanvas from './useCanvas'
import './canvas.css';

const Flower = props => {

  const { animate, restart, generate, ...rest} = props;
  const canvasRef = useCanvas(animate, generate);

  return (
    <div className="wrapper">
      <div className="canvas-container">
        <canvas id="canvas" ref={canvasRef} {...rest} />
      </div>
        <p className="sub-text">I'm huge fan of the Fibonacci Sequence <br/>
        Take a look at this algorithmic flower generator
        </p>
        <button className="btn" onClick={restart}>Generate a new flower</button>
    </div>
  )
}

export default Flower
