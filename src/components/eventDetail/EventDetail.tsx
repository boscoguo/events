import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootStore } from "../../store/store";
import { SlopRectangle } from "../../components/slopRectangle";
import { EventTeam } from "../eventTeam";

import "./eventDetail.scss";

import { kings, sharks } from "../../assests/images";

const EventDetail = () => {
  const eventsState = useSelector((state: RootStore) => state.eventsPage);
  const { loading, events } = eventsState;

  return (
    <div className="event-detail">
      <SlopRectangle backgroundColor="#ED550D">
        <p>National Basketball Association</p>
      </SlopRectangle>
      <div className="event-detail__teams">
        <SlopRectangle backgroundColor="#181A1D">
          <div className="event-detail__teams__wrapper">
            {loading ? (
              "Loading..."
            ) : (
              <>
                <EventTeam
                  teamName={events?.home_team.name}
                  score={events?.home_team.score}
                  logo={kings}
                />
                <div className="event-detail__teams__wrapper-slash"></div>
                <EventTeam
                  teamName={events?.away_team.name}
                  score={events?.away_team.score}
                  logo={sharks}
                />
              </>
            )}
          </div>
        </SlopRectangle>
      </div>
      <div className="event-detail__second">
        <SlopRectangle backgroundColor="#181A1D" border="1px solid #fff">
          <p>Second Quarter 14:37</p>
        </SlopRectangle>
      </div>
    </div>
  );
};

export default EventDetail;
