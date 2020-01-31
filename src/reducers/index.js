// Note: This 'reducer index' file is literally the state...
// e.g. 'jwtToken' set to jwtReducer below IS a piece of state

import { combineReducers } from "redux";
import jwtReducer from "./jwt_reducer";

export default combineReducers({
  jwtToken: jwtReducer
});
