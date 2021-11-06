import React from "react";
import { SlopRectangle } from "../../components/slopRectangle";

import "./eventTeam.scss";

interface EventTeamProps {
  teamName: string;
  score: number;
  alt: string;
  logo: string;
}

const EventTeam = ({ teamName, score, logo, alt }: EventTeamProps) => {
  return (
    <div className="team">
      <SlopRectangle backgroundColor="#23262B">
        <div className="team__wrapper">
          <img src={logo} alt={alt} />
          <p>{teamName}</p>
        </div>
      </SlopRectangle>
      <p className="team__score">{score}</p>
    </div>
  );
};

export default EventTeam;
