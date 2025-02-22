import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  myObj = {
    name: "hitesh",
    age: 25,
    address: {
      city: "Jaipur",
      state: "Rajsthan",
      country: "India",
    },
  };

  let newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  
  return (
    <>
      <h1 className="text-3xl bg-green-500  p-3 ">Vite with tailwind</h1>
      <Card />
    </>
  );
}

export default App;
