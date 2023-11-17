import { combineReducers } from "redux";
import reducer, { handleFooterMenu } from "./reducer/pagesReducer";

const rootReducer = combineReducers({
  pageReducer: reducer,
  footerMenu: handleFooterMenu,
});

export default rootReducer;
