import {
  EventDispatchTypes,
  EventType,
  EVENT_SUCCESS,
  EVENT_FAIL,
  EVENT_LOADING
} from "../action/eventActionType";


interface DefaultStateI {
  loading: boolean;
  events?: EventType
}

const defaultState: DefaultStateI = {
  loading: false
};

const eventReducer = (
  state: DefaultStateI = defaultState,
  action: EventDispatchTypes
): DefaultStateI => {
  switch (action.type) {
    case EVENT_FAIL:
      return {
        ...state
      };
    case EVENT_LOADING:
      return {
        ...state,
        loading: true
      };
    case EVENT_SUCCESS:
      return {
        ...state,
        loading: false,
        events: action.payload,
      };
    default:
      return state;
  }
  return state;
};

export default eventReducer;
