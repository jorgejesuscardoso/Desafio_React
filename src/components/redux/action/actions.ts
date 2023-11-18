export const FILTER_NEWS_AND_RELEASE = 'FILTER_NEWS_AND_RELEASE';
export const FILTER_DATE = 'FILTER_DATE';
export const FILTER_DATE_SEARCH = 'FILTER_DATE_SEARCH';

export const nextPagesAction = () => {
    return {
        type: 'NEXT_PAGE',
    };
}
export const prevPagesAction = () => {
  return {
      type: 'PREV_PAGE',
  };
}
export const footerMenuDisplayAction = () => {
  return {
      type: 'HANDLE_FOOTER_MENU_DISPLAY',
      true: true,
  };
}
export const filterAllAction = (filter: string) => {
  return {
      type: FILTER_NEWS_AND_RELEASE,
      payload: filter,
  };
}
export const filterDateAction = () => {
  return {
      type: FILTER_DATE_SEARCH,
  };
}