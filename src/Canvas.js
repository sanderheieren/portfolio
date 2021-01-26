import React, { useRef, useEffect } from 'react';

const Canvas = props => {

  //const { draw, ...rest} = props;
  const canvasRef = useRef(null);

  let number = 0;
  let scale = 2;
  let hue = Math.random() * 360;

  const animate = (ctx, frameCount) => {

    let angle = number * 10;
    let radius = scale * Math.sqrt(number);
    let posX = radius * Math.sin(angle) + ctx.canvas.width / 2;
    let posY = radius * Math.cos(angle) + ctx.canvas.height / 2;

    ctx.fillStyle = `hsl(${hue},100%, 50%)`;
    ctx.strokeStyle = 'lightgray' //`hsl(${hue},100%, 50%)` // 'green';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(posX, posY, radius, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    number++;
    hue++;
  }
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.globalCompositeOperation = 'destination-over';
    let frameCount = 0
    let animationFrameId

    const render = () => {
      frameCount++;
      animate(ctx, frameCount);
      animationFrameId = window.requestAnimationFrame(render);
    }
    render();
    
    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [animate])


  return (
    <div className="canvas-container">
      <canvas id="canvas" ref={canvasRef} {...props} />
    </div>
  )
}

export default Canvas
