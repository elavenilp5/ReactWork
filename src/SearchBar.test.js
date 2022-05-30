import { render, screen, cleanup } from "@testing-library/react"
import Searchbar from "./Components/Searchbar"

test("should render searchbar component", () => {
  render(<Searchbar />)
  const searchElement = screen.getByTestId("searchbox")
  expect(searchElement).toBeInTheDocument()
})
