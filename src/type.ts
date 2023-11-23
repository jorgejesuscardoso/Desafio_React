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
  items: ItemProps[];
};

export type MiscellanousFilterType = {
  filterAll: {
    filterGeoscience: boolean,
    filterSocial: boolean,
    filterIbge: boolean,
    filterEconomy: boolean,
    filterMarked: boolean,
    filterFavorite: boolean,
  };
};
export type SearchNewsType = {
  search: {
    searchNews: string;
  };
};
export type UserTypes = [{
  id: number,
  nome: string,
  sobrenome: string,
  idade: number,
  foto: string, 
  email: string,
  senha: string,
  connected?: boolean,
  endereco: {
    rua: string,
    numero: number,
    bairro: string,
    cidade: string,
    estado: string,
    pais: string,
      },
}]

export type UserConnetedProps = {
  userConnected: UserTypes;
};

export type LoginType = {
  email: string;
  senha: string;
};

