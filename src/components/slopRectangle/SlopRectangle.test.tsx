import { screen, render } from "@testing-library/react";
import { SlopRectangle } from ".";

describe("<SlopRectangle />", () => {
  it("should display related background color and border when the component loading", () => {
    render(<SlopRectangle backgroundColor="pink" border="1px solid white" />);
    const slopRctangleElement = screen.getByTestId("slop-rectangle-element");
    expect(slopRctangleElement).toBeInTheDocument();
    expect(slopRctangleElement).toHaveStyle(`
    background-color: pink;
    border: 1px solid white;
  `);
  });
});
