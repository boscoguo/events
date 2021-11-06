import React from "react";
import { SlopRectangle } from "../slopRectangle";
import "./nationalChmpions.scss";

import { nationalChamp, location } from "../../assests/images";

const colorsArr = ["#ED550D", "#B9912E", "#9C5230", "#ED550D", "#ED550D"];

const NationalChampions = () => {
  return (
    <div className="champions">
      <div className="champions__colors">
        {colorsArr.map((color, index) => (
          <div className={`champions__colors-color champions__colors-${index}`} key={index} data-testid="champions-color-element">
            <SlopRectangle backgroundColor={color}>
              <></>
            </SlopRectangle>
          </div>
        ))}
      </div>
      <div className="champions__league">
        <SlopRectangle backgroundColor="#24272C">
          <img src={nationalChamp} alt="national champions" />
        </SlopRectangle>
      </div>
      <div className="champions__arena">
        <SlopRectangle backgroundColor="#000">
          <div className="champions__arena-wrapper">
            <img src={location} alt="location" className="champions__arena-wrapper-location" />
            <p>United Center</p>
          </div>
        </SlopRectangle>
      </div>
    </div>
  );
};

export default NationalChampions;
