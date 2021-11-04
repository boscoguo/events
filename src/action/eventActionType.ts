export const EVENT_LOADING = "EVENT_LOADING";
export const EVENT_FAIL = "EVENT_FAIL";
export const EVENT_SUCCESS = "EVENT_SUCCESS";

export type EventType = {
  home_team: TeamType;
  away_team: TeamType;
};

export type TeamType = {
  name: string;
  score: number;
};

export interface EventLoading {
  type: typeof EVENT_LOADING;
}

export interface EventFail {
  type: typeof EVENT_FAIL;
}

export interface EventSuccess {
  type: typeof EVENT_SUCCESS;
  payload: EventType;
}

export type EventDispatchTypes = EventLoading | EventFail | EventSuccess;
