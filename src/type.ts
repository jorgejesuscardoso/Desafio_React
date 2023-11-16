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
  favoriteId: number;
};