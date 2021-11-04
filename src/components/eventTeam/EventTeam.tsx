import React from "react";
import { SlopRectangle } from "../../components/slopRectangle";

import "./eventTeam.scss";

interface EventTeamProps {
  teamName: string;
  score: number;
  logo: string;
}

const EventTeam = ({ teamName, score, logo }: EventTeamProps) => {
  return (
    <div className="team">
      <SlopRectangle backgroundColor="#23262B">
        <div className="team__wrapper">
          <img src={logo} alt="" />
          <p>{teamName}</p>
        </div>
      </SlopRectangle>
      <p className="team__score">{score}</p>
    </div>
  );
};

export default EventTeam;
