import { fireEvent, render, screen } from "@testing-library/react"
import App from "./App"
import { replaceCamelWithSpaces } from "./App"

test("button has correct initial color and text", () => {
  render(<App />)
  const colorButton = screen.getByRole("button", { name: "Change to blue" })
  expect(colorButton).toHaveStyle({ backgroundColor: "red" })
})

test("button turns blue when clicked", () => {
  render(<App />)
  const colorButton = screen.getByRole("button", { name: "Change to blue" })
  expect(colorButton).toHaveStyle({ backgroundColor: "red" })
  fireEvent.click(colorButton)
  expect(colorButton).toHaveStyle({ backgroundColor: "blue" })
  expect(colorButton.textContent).toBe("Change to red")
})

test("initial conditions", () => {
  render(<App />)
  const colorButton = screen.getByRole("button", { name: "Change to blue" })
  expect(colorButton).toBeEnabled()

  const checkbox = screen.getByRole("checkbox")
  expect(checkbox).not.toBeChecked()
})

test("checkbox disabled button on first click and enabled on second click", () => {
  render(<App />)
  const checkbox = screen.getByRole("checkbox", { name: "Disable button" })
  const colorButton = screen.getByRole("button", { name: "Change to blue" })
  fireEvent.click(checkbox)
  expect(checkbox).toBeChecked()
  expect(colorButton).toBeDisabled()
  expect(colorButton).toHaveStyle({ backgroundColor: "gray" })
  fireEvent.click(checkbox)
  expect(checkbox).not.toBeChecked()
  expect(colorButton).toBeEnabled()
  expect(colorButton).toHaveStyle({ backgroundColor: "red" })
  fireEvent.click(colorButton)
  expect(colorButton).toHaveStyle({ backgroundColor: "blue" })
  fireEvent.click(checkbox)
  expect(checkbox).toBeChecked()
  expect(colorButton).toBeDisabled()
  expect(colorButton).toHaveStyle({ backgroundColor: "gray" })
})

test("disabled button in gray", () => {
  render(<App />)
  const checkbox = screen.getByRole("checkbox", { name: "Disable button" })
  const colorButton = screen.getByRole("button", { name: "Change to blue" })
  fireEvent.click(checkbox)
  expect(checkbox).toBeChecked()
  expect(colorButton).toBeDisabled()

  fireEvent.click(checkbox)
  expect(checkbox).not.toBeChecked()
  expect(colorButton).toBeEnabled()
})

describe("spaces before camel-case capital letters", () => {
  test("Works for no inner capital letters", () => {
    expect(replaceCamelWithSpaces("Red")).toBe("Red")
  })
  test("works for one inner capital letter", () => {
    expect(replaceCamelWithSpaces("MidnightBlue")).toBe("Midnight Blue")
  })
  test("Works for multiple inner capital letter", () => {
    expect(replaceCamelWithSpaces("MediumVioletRed")).toBe("Medium Violet Red")
  })
})
