import React from "react";
import Sketch from "react-p5";
import p5Types from "p5"; //Import this for typechecking and intellisense

interface ComponentProps {
  // Your component props
}

export const P5Canvas: React.FC<ComponentProps> = () => {
  const setup = (p5: p5Types, canvasParentRef: Element) => {
    //defines the resolution of the graphics, higher the more refined
    p5.pixelDensity(10);

    //draw function automatically runs at 60 frames per second
    //you can change it to something else using the frameRate function
    p5.frameRate(60);

    //canvas size. P5 has built in windowWidth and windowHeight
    p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);

    //fills the bakcground with a background colour.
    //takes an integer value between 0 and 255 , 0 is pure black, and 255 is pure white.
  };

  //   const draw = (p5: p5Types) => {
  //     p5.background(0);
  //     p5.ellipse(x, y, 70, 70);
  //     x++;
  //   };

  function draw(p5: p5Types) {
    //use clear to clear the previous frames.
    //Normally would call background(0) but that would mean assigning it a colour and not being able to see the reference pic
    p5.clear();
    showCoordinateWithMouse(p5);
    p5.noFill();
    // p5.stroke(255, 102, 0);
    // p5.line(85, 20, 10, 10);
    // p5.line(90, 90, 15, 80);
    p5.stroke(0, 0, 0);
    p5.strokeWeight(2);
    p5.beginShape();
    p5.vertex(30, 180);
    p5.bezierVertex(472, 408, 360, 87, 470, 113);
    p5.endShape();
  }

  function showCoordinateWithMouse(p5: p5Types) {
    p5.fill("Salmon");
    p5.textSize(16);
    p5.textAlign(p5.CENTER);
    p5.text(
      "(" + p5.floor(p5.mouseX) + ", " + p5.floor(p5.mouseY) + ")",
      p5.mouseX,
      p5.mouseY
    );
  }

  return <Sketch setup={setup} draw={draw} />;
};
