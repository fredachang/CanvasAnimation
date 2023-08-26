import { useEffect, useRef } from "react";

//structuring prop type this way allows you to pass down any canvas attribute from the parent
type CanvasProps = React.DetailedHTMLProps<
  React.CanvasHTMLAttributes<HTMLCanvasElement>,
  HTMLCanvasElement
> & {
  draw: (
    context: CanvasRenderingContext2D,
    width: number,
    height: number
  ) => void;
};

export const BasicCanvas: React.FC<CanvasProps> = ({ draw, ...props }) => {
  // step one is to reference the native canvas element using the useRef hook
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  //use useEffect hook to make sure the animation mounts everytime the draw function is updated
  useEffect(() => {
    //console.log(canvasRef) gives {current:null} so use canvasRef.current to get the canvas element
    const canvas = canvasRef.current;

    //check that canvas isnt null so typescript compiler doenst throw errors
    if (!canvas) {
      return;
    }

    const context = canvas.getContext("2d");
    if (!context) {
      return;
    }
    //the draw attribute allows functions to be passed down from App instead of creating custom shapes here
    draw(context, innerWidth, innerHeight);
  }, [draw]);

  return (
    <>
      <canvas
        ref={canvasRef}
        width={props.width}
        height={props.height}
        className="basic-canvas"
      />
    </>
  );
};
