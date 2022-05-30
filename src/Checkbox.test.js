import { render, screen } from "@testing-library/react"
import { Checkbox } from "./Components/Checkbox"

describe("<App />", () => {
  test("render component", () => {
    render(<Checkbox />)

    const cbEl = screen.getByTestId("cbShowHide")
    expect(cbEl).toBeInTheDocument()
    expect(cbEl).not.toBeChecked()

    expect(screen.queryByTestId("box")).not.toBeInTheDocument()
  })
})
