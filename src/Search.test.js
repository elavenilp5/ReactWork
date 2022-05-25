import React from "react"
import { render, fireEvent, screen } from "@testing-library/react"
import Searchbar from "./Components/Searchbar"

it("renders correctly", () => {
  const { queryByTestId, queryByPlaceholderText } = render(<Searchbar />)
  expect(screen.getByTestId("searchbox")).toBeTruthy()
  expect(screen.getByPlaceholderText("search")).toBeTruthy()
})
