const animateParticle = (ctx, particlesArray) => {
  ctx.fillStyle = 'rgba(173,216,130,0.01)'
  // ctx.clearRect(0,0,canvas.width, canvas.height)
  ctx.fillRect(0,0,ctx.canvas.width, ctx.canvas.height);
  for(let i = 0; i < particlesArray.length; i++) {
    particlesArray[i].update();
    particlesArray[i].draw();
  }
  requestAnimationFrame(animateParticle);
}

export default animateParticle;