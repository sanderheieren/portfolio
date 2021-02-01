const animate = (ctx, scale, number, hue) => {
  let angle = number * 8;
  let radius = scale * Math.sqrt(number);
  let posX = radius * Math.sin(angle) + ctx.canvas.width / 2;
  let posY = radius * Math.cos(angle) + ctx.canvas.height / 2;

  if (number > 800) {
    return;
  }

  ctx.fillStyle = 'red'//'red'//`hsl(${Math.random() * 360},100%, 50%)`;
  ctx.strokeStyle = 'black'//`hsl(${hue},100%, 50%)` // 'green';
  ctx.lineWidth = 0.5;
  ctx.beginPath();
  ctx.arc(posX, posY, radius, 0, Math.PI * 2);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
}

export default animate;