/* eslint-disable @typescript-eslint/no-explicit-any */
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
export interface MenuHeaderContentProps {
  userConnectado: boolean;
  setUserConnectado: React.Dispatch<React.SetStateAction<boolean>>;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
}
export interface SearchContentProps {
  showSearch: boolean;
  setShowSearch: (value: boolean) => void;
  search: string;
  setSearch: (value: string) => void;
}
export interface IconesHeaderProps {
  showSearch: boolean;
  setShowSearch: (value: boolean) => void;
  setSearch: (value: string) => void;
  showMenu: boolean;
  setShowMenu: (value: boolean) => void;
}
export interface PopUpProps {
  popUp: string;
  setPopUp: (value: string) => void;
}
export interface ApiDataType {
  apiData: FilterTypeNewsRelease;
  setNumberPage: any;
  setData: (prevData: any) => void;
  setPopUp: (value: string) => void;
  AllFilters: { 
    filterGeoscience: boolean;
    filterSocial: boolean;
    filterIbge: boolean;
    filterEconomy: boolean;
    filterMarked: boolean;
    filterFavorite: boolean; };
}
export interface ContentProps {
  items: ItemProps[];
  error: boolean;
  page: number;
}
export interface FormLoginProps {
  email: string
  setEmail: React.Dispatch<React.SetStateAction<string>>
  password: string
  setPassword: React.Dispatch<React.SetStateAction<string>>
  setError: React.Dispatch<React.SetStateAction<boolean>>
  handleOnSubmit: (e: React.FormEvent<HTMLFormElement>) => void
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
  page: number;
  totalPages: number;
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

export type NewUserType = {
  id: number, 
  email: string,
  senha: string,
  nome: string,
  sobrenome: string,
  idade: string,
  endereco: string,
  foto: string,
};

export type LoginType = {
  email: string;
  senha: string;
  id: number;
  name: string;
};

export interface ChangeFotoProps {
  userInfo: any;
  newUserInfo: any;
  setNewUserInfo: (newUserInfo: any) => void;
  }

export interface CurrentInfoProps {
  userInfo: any;
  showPass: boolean;
  handleShowPass: () => void;  
}
export interface ValidateInfoProps {
  newUserInfo: {
    nome: string;
    sobrenome: string;
    idade: string;
    email: string;
    senha: string;
  };
  setNewUserInfo: (newUserInfo: any) => void;
  confirmNewPass: {
    senha: string;
  };
  setConfirmNewPass: React.Dispatch<React.SetStateAction<{
    senha: string;
  }>>;
  confirmaSenha: boolean;
}
export interface AddressInfoProps {
  newUserInfo: any;
  setNewUserInfo: any;
}
export interface Page0FormProps {
  email: string;
  setEmail: (value: string) => void;
  password: string;
  setPassword: (value: string) => void;
  confirmPassword: string;
  setConfirmPassword: (value: string) => void;
  error3: string;
  setError: (value: boolean) => void;
  setIsRegister: (value: boolean) => void;
}
export interface Page1FomProps {
  name: string;
  setName: (value: string) => void;
  lastname: string;
  setLastname: (value: string) => void;
  age: string;
  setAge: (value: string) => void;
  setError: (value: boolean) => void;
  setIsRegister: (value: boolean) => void;
}
export interface Page2FormProps {
  address: {
    rua: string;
    numero: string;
    bairro: string;
    cidade: string;
    estado: string;
    pais: string;
  };
  setAddress: React.Dispatch<React.SetStateAction<{
    rua: string;
    numero: string;
    bairro: string;
    cidade: string;
    estado: string;
    pais: string;
  }>>;
  setError: (value: boolean) => void;
  setIsRegister: (value: boolean) => void;
}

export interface Page3FormProps {
  thumb: string;
  setThumb: (value: string) => void;
  setError: (value: boolean) => void;
  setIsRegister: (value: boolean) => void;
  disable: boolean;
}
export interface NavigateBtnsProps {
  page: number;
  setPage: (value: number) => void;
  disable: boolean;
  setError: (value: boolean) => void;
  setErrorMsg: (value: string) => void;
}