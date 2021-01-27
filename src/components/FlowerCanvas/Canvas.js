import React from 'react';
import useCanvas from './useCanvas'
import './canvas.css';

const Canvas = props => {

  const { animate, ...rest} = props;
  const canvasRef = useCanvas(animate);

  return (
    <div className="wrapper">
        <p className="sub-text">I'm huge fan of the Fibonacci Sequence <br/>
        Take a look at this algorithmic flower generator
        </p>
    <div className="canvas-container">
      <canvas id="canvas" ref={canvasRef} {...rest} />
    </div>
    </div>
  )
}

export default Canvas
