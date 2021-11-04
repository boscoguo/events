import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { NationalChampions } from "../components/nationalChampions";
import { EventDetail } from "../components/eventDetail";
import { getEvent } from "../action/eventAction";
import "./page.scss";

const Page = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEvent());
  });

  return (
    <div className="page">
      <div className="page__container">
        <div className="page__container-left">
          <NationalChampions />
        </div>
        <div className="page__container-right">
          <EventDetail />
        </div>
      </div>
    </div>
  );
};

export default Page;
