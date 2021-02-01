import { useRef, useEffect } from 'react'

const useCanvas = (animate, generate) => {

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
      animate(ctx, scale, number, hue, generate);
      animationFrameId = window.requestAnimationFrame(render);
    }
    render();
    
    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [animate, generate]);

  return canvasRef;
}

export default useCanvas
