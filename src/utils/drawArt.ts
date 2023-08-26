export const drawArt = (
  context: CanvasRenderingContext2D,
  width: number,
  height: number
) => {
  context.fillStyle = "blue";
  context.fillRect(0, 0, 100, 100);

  //this cuts a hole in the rectangle
  context.clearRect(10, 10, 80, 80);

  //this creates a rectangle with a stroke
  context.strokeRect(100, 100, 50, 50);

  //fillText
  context.font = "30px Arial ";

  //to update the text colour, use the fillStyle again. The fillText prop looks for the last fillStyle
  context.fillStyle = "red";
  context.fillText("HELLO WORLD", 20, 50);

  //paths
  context.beginPath();
  context.moveTo(250, 50);
  context.lineTo(450, 50);
  context.lineTo(350, 200);
  context.lineTo(250, 50);
  context.closePath();
  context.strokeStyle = "red";
  context.lineWidth = 10;
  context.stroke();
  //it has to be a complete path to fill it
  context.fillStyle = "blue";
  context.fill();

  //arcs
  const centreX = width / 2;
  const centreY = height / 2;
  context.beginPath();
  //note x and y is the center of the circle. A full circle end angle is Math.PI*2 and a half circle is just Math.PI
  context.arc(centreX, centreY, 200, 0, Math.PI * 2);
  //move to mouth
  context.moveTo(centreX + 100, centreY);
  //draw mouth
  context.arc(centreX, centreY, 100, 0, Math.PI);
  context.stroke();
};
