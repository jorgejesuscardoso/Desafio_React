import { AnyAction } from 'redux';
const initialState = {
  page: 1,
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

export default reducer;
