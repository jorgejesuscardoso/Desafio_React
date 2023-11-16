import { FavoriteType } from "../../type";
// Obtem local storage e verifica se o item já está salvo dinamicamente, necessário passar, key e id
export function getLocalStorage (key: string, id: FavoriteType) {
  const Store = localStorage.getItem(`${key}`) || "[]";    
    const favoriteArray = JSON.parse(Store);
    const storedItems = [...favoriteArray]
    const isStored = storedItems.includes(id.id);    
    return { isStored, storedItems };
}
// Salva o item no local storage dinamicamente, necessário passar, key, id e o array de itens
export function setLocalStorage (key: string, id: FavoriteType, array: number[]) {
  array.push(id.id);
  localStorage.setItem(`${key}`, JSON.stringify(array));
}
// Remove o item no local storage dinamicamente, necessário passar, key, id e o array de itens
export function removeFromLocalStorage (key: string, id: FavoriteType, array: number[]) {
  const index = array.indexOf(id.id);
  array.splice(index, 1);
  localStorage.setItem(`${key}`, JSON.stringify(array));
}
