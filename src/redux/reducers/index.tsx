import { combineReducers } from "redux";
import { commentsReducer } from "./commentsReducer";
import { courseReducer } from "./courseReducer";

const reducers = combineReducers({
  courses: courseReducer,
  commentsData: commentsReducer,
});

export default reducers;

export type State = ReturnType<typeof reducers>;
