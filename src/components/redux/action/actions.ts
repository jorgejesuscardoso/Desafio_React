
export const FILTER_NEWS_AND_RELEASE = 'FILTER_NEWS_AND_RELEASE';
export const FILTER_DATE = 'FILTER_DATE';
export const FILTER_DATE_SEARCH = 'FILTER_DATE_SEARCH';
export const FILTER_GEOSCIENCE = 'FILTER_GEOSCIENCE';
export const FILTER_SOCIAL = 'FILTER_SOCIAL';
export const FILTER_IBGE = 'FILTER_IBGE';
export const FILTER_ECONOMY = 'FILTER_ECONOMY';
export const FILTER_MARKED = 'FILTER_MARKED';
export const FILTER_FAVORITE = 'FILTER_FAVORITE';
export const SHEARCH_NEWS = 'SHEARCH_NEWS';
export const DARKE_MODE = 'DARKE_MODE';

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
      type: FILTER_DATE,
  };
}
export const filterSearchDateAction = (date: string) => {
  return {
      type: FILTER_DATE_SEARCH,
      payload: date,
  };
}
export const filterGeoscienceAction = () => {
  return {
      type: FILTER_GEOSCIENCE,
  };
}
export const filterSocialAction = () => {
  return {
      type: FILTER_SOCIAL,
  };
}
export const filterIbgeAction = () => {
  return {
      type: FILTER_IBGE,
  };
}
export const filterEconomyAction = () => {
  return {
      type: FILTER_ECONOMY,
  };
}
export const filterMarkedAction = () => {
  return {
      type: FILTER_MARKED,
  };
}
export const filterFavoriteAction = () => {
  return {
      type: FILTER_FAVORITE,
  };
}
export const searchNewsAction = (search: string) => {
  return {
      type: SHEARCH_NEWS,
      payload: search,
  };
}
export const darkModeAction = () => {
  return {
      type: DARKE_MODE,
  };
}
