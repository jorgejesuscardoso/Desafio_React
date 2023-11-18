import { combineReducers } from "redux";
import reducer, { filterAllReducer, filterDateReducer, handleFooterMenu } from "./reducer/reducers";

const rootReducer = combineReducers({
  pageReducer: reducer,
  footerMenu: handleFooterMenu,
  filterNewsAndRelease: filterAllReducer,
  filterDate: filterDateReducer,
});

export default rootReducer;
