import { combineReducers } from "redux";
import eventReducer from "./eventReducer";

const RootReducer = combineReducers({
  eventsPage: eventReducer
});

export default RootReducer;
