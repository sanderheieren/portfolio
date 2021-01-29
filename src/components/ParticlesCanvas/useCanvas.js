import { useRef, useEffect, useState } from 'react'
// denne må gjøres om drastisk
// kan jeg lage es6 klasse komponenter som i js inn i react

const useCanvas = (animateParticle, initParticle) => {

    const canvasRef = useRef(null);

    useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.canvas.height = 300;
    ctx.canvas.width = 300;
    ctx.globalCompositeOperation = 'destination-over';
    let animationFrameId

    const render = () => {
      animateParticle(ctx, initParticle.particlesArray);
      animationFrameId = window.requestAnimationFrame(render);
    }
    render();
    initParticle()
    
    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [animateParticle]);

    class Particle {
      constructor(x,y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 13 + 1;
        this.weight = Math.random() * 1 + 1;
        this.directionX = 1.5;
      }
      update() {
        if(this.y > ctx.canvas.height) {
          this.y = 0 - this.size;
          this.weight = Math.random() * 1 + 1;
          this.x = Math.random() * ctx.canvas.width * (2.3);
        }

        this.weight += 0.01;
        this.y += this.weight;
        this.x += this.directionX;
        }
        draw() {
          ctx.fillStyle = `hsl(${hue},100%, 50%)`//'orange';
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.closePath();
          ctx.fill(); 
        }
      }
  return canvasRef;
}

export default useCanvas