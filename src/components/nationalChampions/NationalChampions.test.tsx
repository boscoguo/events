import { screen, render } from "@testing-library/react";
import { NationalChampions } from ".";

describe("<NationalChampions />", () => {

  it("should display 5 color elements when page loading", () => {
    render(<NationalChampions />);
    const colorElements = screen.getAllByTestId("champions-color-element");
    expect(colorElements).toHaveLength(5);
  })

  it("should display the league pic when page loading", () => {
    render(<NationalChampions />);
    const picLeague = screen.getByAltText(/national champions/i);
    expect(picLeague).toBeInTheDocument();
  })

  it("should have the arena information when page loading", () => {
    render(<NationalChampions />);
    const locationIcon = screen.getByAltText(/location/i);
    expect(locationIcon).toBeInTheDocument();
    const address = screen.getByText(/United Center/i);
    expect(address).toBeInTheDocument();
  })
})