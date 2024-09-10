import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState();

  return (
    <>
      <div
        className="container-fluid text-center font-serif  w-full h-screen bg-zinc-500"
        style={{ backgroundColor: color }}
      >
        <h1 className="text-5xl p-5 font-bold text-orange-200">Background Changer Button</h1>
        <div className="colorBox text-white">
          <button
            onClick={() => setColor("red")}
            className="bg-red-800 p-2 m-3 rounded-md w-36"
          >
            Red
          </button>

          <button
            className="bg-blue-900 p-2 m-3 rounded-md w-36"
            onClick={() => setColor("blue")}
          >
            Blue
          </button>
          <button
            className="bg-green-900 p-2 m-3 rounded-md w-36"
            onClick={() => setColor("green")}
          >
            Green
          </button>
          <button
            className="bg-yellow-500 p-2 m-3 rounded-md w-36"
            onClick={() => setColor("yellow")}
          >
            Yellow
          </button>
          <button
            className="bg-sky-500 p-2 m-3 rounded-md w-36"
            onClick={() => setColor("skyBlue")}
          >
            Sky Blue
          </button>
          <button
            className="bg-gray-900 p-2 m-3 rounded-md w-36"
            onClick={() => setColor("gray")}
          >
            Gray
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
