import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Checkbox } from "./Components/Checkbox"

test("toggle element by selecting checkbox", () => {
  render(<Checkbox />)

  const cbEl = screen.getByTestId("cbShowHide")

  // Execute the click event of the checkbox
  userEvent.click(cbEl)
  expect(cbEl).toBeChecked()
  expect(screen.getByTestId("box")).toBeInTheDocument()

  // Execute the click event again
  userEvent.click(cbEl)
  expect(cbEl).not.toBeChecked()
  expect(screen.queryByTestId("box")).not.toBeInTheDocument()
})
