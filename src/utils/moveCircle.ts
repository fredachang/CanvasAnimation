//animation - bouncing circle
export const moveCircle = (
  context: CanvasRenderingContext2D,
  width: number,
  height: number
) => {
  //create the object to be animated in an object format making it easeir to reference later

  const circle = {
    x: 100,
    y: 100,
    size: 50,
    dx: 8, //animation increment along the x axis
    dy: 4,
  };

  function drawCircle() {
    context.beginPath();
    context.arc(circle.x, circle.y, circle.size, 0, Math.PI * 2);
    context.fillStyle = "pink";
    context.fill();
  }

  function animateCircle() {
    //the canvas needs to be cleared each time, so the animatin appears in steps rather than continuous
    context.clearRect(0, 0, width, height);
    drawCircle();

    //change position
    circle.x += circle.dx; //appending the x increment to the x axis
    circle.y += circle.dy;

    //detect sidewalls

    if (circle.x + circle.size > width || circle.x - circle.size < 0) {
      circle.dx *= -1; //circle.dx = circle.dx * 1
    }

    if (circle.y + circle.size > height || circle.y - circle.size < 0) {
      circle.dy *= -1; //circle.dx = circle.dx * 1
    }

    requestAnimationFrame(animateCircle);
    // console.log(123); shows 123 going forever - basically repainting the canvas
  }

  animateCircle();
};
