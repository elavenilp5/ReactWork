import { render, screen } from "@testing-library/react"
import DraftTable from "./Components/DraftTable"

test("should render table component", () => {
  render(<DraftTable />)
  const tableElement = screen.getByTestId("tableDraft")
  expect(tableElement).toBeInTheDocument()
})
