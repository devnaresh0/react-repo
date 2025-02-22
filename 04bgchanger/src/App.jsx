import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");

  function changeColor(color) {
    setColor(color);
  }

  return (
    <div
      className="w-full h-screen duration-200 "
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center bg-white px-3 py-2 rounded-3xl">
          <button
            onClick={() => {
              changeColor("white");
            }}
            className="
          outline-none px-4 py-1 rounded-full text-black shadow-lg"
          >
            White
          </button>
          <button
            onClick={() => {
              changeColor("black");
            }}
            className="
          outline-none px-4 py-1 rounded-full text-black shadow-lg "
          >
            Black
          </button>
          <button
            onClick={() => {
              changeColor("green");
            }}
            className="
          outline-none px-4 py-1 rounded-full text-green shadow-lg"
          >
            Green
          </button>
          <button
            onClick={() => {
              changeColor("yellow");
            }}
            className="
          outline-none px-4 py-1 rounded-full text-yellow shadow-lg "
          >
            Yellow
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
