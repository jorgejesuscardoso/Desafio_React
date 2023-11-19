import { combineReducers } from "redux";
import reducer, { filterAllReducer, filterDateReducer, handleFooterMenu, miscellaneousFilterReducer } from "./reducer/reducers";

const rootReducer = combineReducers({
  pageReducer: reducer,
  footerMenu: handleFooterMenu,
  filterNewsAndRelease: filterAllReducer,
  filterDate: filterDateReducer,
  filterAll: miscellaneousFilterReducer,
});

export default rootReducer;
