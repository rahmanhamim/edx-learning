import { combineReducers } from "redux";
import { discussionsReducer } from "./discussionsReducer";
import { courseReducer } from "./courseReducer";

const reducers = combineReducers({
  courses: courseReducer,
  discussionsData: discussionsReducer,
});

export default reducers;

export type State = ReturnType<typeof reducers>;
