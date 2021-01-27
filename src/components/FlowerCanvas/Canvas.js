import React from 'react';
import useCanvas from './useCanvas'
import './canvas.css';

const Canvas = props => {

  const { animate, ...rest} = props;
  const canvasRef = useCanvas(animate);

  return (
    <div className="canvas-container">
      <canvas id="canvas" ref={canvasRef} {...rest} />
    </div>
  )
}

export default Canvas
