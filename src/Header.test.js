import { render, screen } from "@testing-library/react"
import Header from "./Components/Header"

test("should render header component", () => {
  render(<Header />)
  const headerElement = screen.getByTestId("head")
  expect(headerElement).toBeInTheDocument()
})
