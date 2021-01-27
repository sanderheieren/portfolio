import { useRef, useEffect } from 'react'

const useCanvas = animate => {

    const canvasRef = useRef(null);
    
    useEffect(() => {
    let number = 0;
    let scale = 2;
    let hue = Math.random() * 360;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.canvas.height = 300;
    ctx.canvas.width = 300;
    ctx.globalCompositeOperation = 'destination-over';
    let animationFrameId

    const render = () => {
      number++
      hue++ // = hue % 2 ? Math.random() * 360 : hue++;
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
