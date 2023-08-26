import "./App.css";
import { BasicCanvas } from "./components/BasicCanvas";
import { P5Canvas } from "./components/p5";
import { drawArt } from "./utils/drawArt";

function App() {
  return (
    <>
      <section className="w-screen h-screen flex">
        <div className="z-20">
          <P5Canvas />
        </div>
        <div className="w-screen h-screen absolute top-0">
          <img src="/star.png" className="w-full h-full object-cover" />
        </div>
        {/* <BasicCanvas
          draw={drawArt}
          width={window.innerWidth}
          height={window.innerHeight}
        /> */}
        {/* <BasicCanvas
          draw={moveCircle}
          width={window.innerWidth}
          height={window.innerHeight}
        /> */}
      </section>
    </>
  );
}

export default App;
