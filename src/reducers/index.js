// Note: This 'reducer index' file is literally the state...
// e.g. 'jwtToken' set to jwtReducer below is a 'piece of state' of the app

import { combineReducers } from "redux";
import jwtReducer from "./jwt_reducer";
import pdfTriggerReducer from "./pdf_trigger_reducer";

export default combineReducers({
  jwtToken: jwtReducer,
  pdfTrigger: pdfTriggerReducer
});
