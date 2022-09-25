import { useState } from "react"

import "./App.css"

function App() {
  const [buttonColor, setButtonColor] = useState("red")
  const [disabled, setDisabled] = useState(false)
  const newButtonColor = buttonColor === "red" ? "blue" : "red"
  const handleButton = () => setButtonColor(newButtonColor)
  const handleChange = (e) => setDisabled(e.target.checked)

  return (
    <div>
      <button
        style={{ backgroundColor: buttonColor }}
        onClick={handleButton}
        disabled={disabled}
      >
        Change to {newButtonColor}
      </button>
      <input
        type="checkbox"
        onChange={handleChange}
        id="disable-button-checkbox"
        aria-checked={disabled}
      />
      <label htmlFor="disable-button-checkbox">Disable button</label>
    </div>
  )
}

export default App
