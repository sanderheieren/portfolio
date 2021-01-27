import { useRef, useEffect } from 'react'

const useCanvas = animate => {

    const canvasRef = useRef(null);
    let number = 0;
    let scale = 2;
    let hue = Math.random() * 360;

   useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.canvas.height = 500;
    ctx.canvas.width = 500;
    ctx.globalCompositeOperation = 'destination-over';
    let frameCount = 0
    let animationFrameId

    const render = () => {
      number++
      hue = Math.random() * 360;
      animate(ctx, scale, number, hue);
      animationFrameId = window.requestAnimationFrame(render);
    }
    render();
    
    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [animate]);

  return canvasRef;
}

export default useCanvas
