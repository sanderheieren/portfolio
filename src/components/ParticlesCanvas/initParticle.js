const initParticle = () => {
  particlesArray = [];
  for(let i = 0; i < numberOfParticles; i++) {
    const x = Math.random() * ctx.canvas.width;
    const y = Math.random() * ctx.canvas.height;
    particlesArray.push(new Particle(x,y))
  }
}
export default initParticle