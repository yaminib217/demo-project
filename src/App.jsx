import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [bgColor, setBgColor] = useState("white");

  const handleChangeColor = (color) => {
    setBgColor(color);
  };

  return (
    <>
      <div
      style={{
        backgroundColor: bgColor,
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1 style={{ color: bgColor === "yellow" ? "black" : "white" }}>
        Background Color: {bgColor}
      </h1>
      <div style={{ display: "flex", gap: "10px" }}>
        {/* Red Button */}
        <button
          onClick={() => handleChangeColor("red")}
          style={{
            padding: "10px 20px",
            backgroundColor: "red",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Red
        </button>

        {/* Blue Button */}
        <button
          onClick={() => handleChangeColor("blue")}
          style={{
            padding: "10px 20px",
            backgroundColor: "blue",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Blue
        </button>

        {/* Green Button */}
        <button
          onClick={() => handleChangeColor("green")}
          style={{
            padding: "10px 20px",
            backgroundColor: "green",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Green
        </button>

        {/* Yellow Button */}
        <button
          onClick={() => handleChangeColor("yellow")}
          style={{
            padding: "10px 20px",
            backgroundColor: "yellow",
            color: "black",
            border: "none",
            cursor: "pointer",
          }}
        >
          Yellow
        </button>
      </div>
    </div>
    </>
  )
}

export default App
