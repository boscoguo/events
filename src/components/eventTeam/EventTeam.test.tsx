import { screen, render } from "@testing-library/react";
import { EventTeam } from "."
import { kings } from "../../assests/images";

describe ("<EventTeam />", () => {
  

  it("team element should be displayed when page loading", () => {
    render(<EventTeam teamName="test team" score={60} logo={kings} alt="kings"/>);
    const logo = screen.getByAltText(/kings/i);
    const score = screen.getByText(/60/i);
    const teamName = screen.getByText(/test team/i)
    expect(logo).toBeInTheDocument();
    expect(score).toBeInTheDocument();
    expect(teamName).toBeInTheDocument();
  })
})