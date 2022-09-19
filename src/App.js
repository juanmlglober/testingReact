import { useState } from "react"
import logo from "./logo.svg"
import "./App.css"

function App() {
  const [buttonColor, setButtonColor] = useState("red")
  const newButtonColor = buttonColor === "red" ? "blue" : "red"
  const handleButton = () => setButtonColor(newButtonColor)
  return (
    <div>
      <button style={{ backgroundColor: buttonColor }} onClick={handleButton}>
        Change to {newButtonColor}
      </button>
    </div>
  )
}

export default App
