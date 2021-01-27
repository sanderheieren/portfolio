const animate = (ctx, scale, number, hue) => {
  let angle = number * 0.5;
  let radius = scale * Math.sqrt(number);
  let posX = radius * Math.sin(angle) + ctx.canvas.width / 2;
  let posY = radius * Math.cos(angle) + ctx.canvas.height / 2;

  ctx.fillStyle = 'lightblue'//`hsl(${Math.random() * 360},100%, 50%)`;
  ctx.strokeStyle = `hsl(${hue},100%, 50%)` // 'green';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.arc(posX, posY, 4, 0, Math.PI * 2);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
}

export default animate;