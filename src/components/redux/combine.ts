import { combineReducers } from "redux";
import reducer, { filterAllReducer, filterDateReducer, handleFooterMenu, miscellaneousFilterReducer, searchNewsReducer } from "./reducer/reducers";

const rootReducer = combineReducers({
  pageReducer: reducer,
  footerMenu: handleFooterMenu,
  filterNewsAndRelease: filterAllReducer,
  filterDate: filterDateReducer,
  filterAll: miscellaneousFilterReducer,
  search: searchNewsReducer,
});

export default rootReducer;
