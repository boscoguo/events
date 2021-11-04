import { Dispatch } from "redux";
import {
  EventDispatchTypes,
  EVENT_SUCCESS,
  EVENT_FAIL,
  EVENT_LOADING,
} from "./eventActionType";

import axios from "axios";

export const getEvent = () => async (
  dispatch: Dispatch<EventDispatchTypes>
) => {
  try {
    dispatch({
      type: EVENT_LOADING,
    });
    const res = await axios.get("http://localhost:3000/mock/data.json");
    dispatch({
      type: EVENT_SUCCESS,
      payload: { home_team: res.data.home_team, away_team:res.data.away_team },
    });
  } catch (e) {
    dispatch({
      type: EVENT_FAIL,
    });
  }
};
