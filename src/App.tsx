import "./App.css";
import { BasicCanvas } from "./components/BasicCanvas";
import { drawArt } from "./utils/drawArt";

function App() {
  return (
    <>
      <section className="main-section">
        <BasicCanvas
          draw={drawArt}
          width={window.innerWidth}
          height={window.innerHeight}
        />
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
