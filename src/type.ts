export interface ItemProps {
  id: number;
  tipo: string;
  editorias: string;
  titulo: string;
  data_publicacao: string;
  introducao: string;
  link: string;
  imagens: string;
}
export type DataHour = {
  dateTime: string;
};
export type FavoriteType = {
  id: number;
};

export type PagesProps = {
  page: number;
  totalPages: number;
};

export type PagesState = {
  pageReducer: {
    page: number;
    currentPage: number;
  };
};
export type MenuType = {
  footerMenu: {
    display: boolean;
  };
};
export type DateProp = {
  filterDate: {
    filterDate: string;
    searchDate: boolean;
  };
};
export type SearchDateProp = {
  initialDate: string;
  finalDate: string;
};
export type FilterTypeNewsRelease = {
  filterNewsAndRelease: {
    filterNewsAndRelease: string;
  };
};