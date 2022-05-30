import { render, screen } from "@testing-library/react"
import BaselineFooter from "./Components/BaselineFooter"

test("should render footer component", () => {
  render(<BaselineFooter />)
  const footerElement = screen.getByTestId("footerBaseline")
  expect(footerElement).toBeInTheDocument()
})
