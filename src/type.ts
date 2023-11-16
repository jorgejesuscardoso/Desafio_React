export interface Item {
  id: number;
  tipo: string;
  editorias: string;
  titulo: string;
  data_publicacao: string;
  introducao: string;
  link: string;
  imagens: string;
}
export type dataHour = {
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
  page: number;
  currentPage: number;
};