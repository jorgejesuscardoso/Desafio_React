import { AnyAction } from 'redux';
import { FILTER_DATE, FILTER_DATE_SEARCH, FILTER_NEWS_AND_RELEASE } from '../action/actions';
const initialState = {
  page: 1,
};
const INITIAL_DISPLAY_FOOTER_MENU = {
  display: false,
};
const INITIAL_NEWS_AND_RELEASE_FILTER = {
  filterNewsAndRelease: '',
};
const initialSearchDate = {
  filterDate: '',
  searchDate: false,
};

const reducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case 'NEXT_PAGE':
      return {
        ...state,
        page: state.page + 1,
      };
    case 'PREV_PAGE':
      return {
        ...state,
        page: state.page - 1,
      };
    default:
      return state;
  }
};

export const handleFooterMenu = (state = INITIAL_DISPLAY_FOOTER_MENU, action: AnyAction) => {
  switch (action.type) {
    case 'HANDLE_FOOTER_MENU_DISPLAY':
      return {
        ...state,
        display: !state.display,
      };
    default:
      return state;
  }
}

export const filterAllReducer = (state = INITIAL_NEWS_AND_RELEASE_FILTER, action: AnyAction) => { 
  switch (action.type) {
    case FILTER_NEWS_AND_RELEASE:
      return {
        ...state,
        filterNewsAndRelease: action.payload,
      };
    default:
      return state;
  }
}

export const filterDateReducer = (state = initialSearchDate, action: AnyAction) => {
  switch (action.type) {
    case FILTER_DATE_SEARCH:
      return {
        ...state,
        filterDate: action.payload,
      };
    case FILTER_DATE:
      return {
        ...state,
        searchDate: !state.searchDate,
      };
    default:
      return state;
  }
}

export default reducer;
