/* eslint-disable @typescript-eslint/no-explicit-any */
import { FavoriteType } from "../../type";

// Rolagem para o topo da página
export function scrolTop () {
  const cardContainer = document.querySelector('.card-container')
  
  if (cardContainer) {
    cardContainer.scrollTop = 0
    }
}

// Obtem local storage dinamicamente e verifica se o item já está salvo, necessário passar, key e id
export function getLocalStorage (key: string, id: FavoriteType) {
  const Store = localStorage.getItem(`${key}`) || "[]";    
    const favoriteArray = JSON.parse(Store);
    const storedItems = [...favoriteArray]
    const isStored = storedItems.includes(id.id);    
    return { isStored, storedItems };
}

export function setLocalStorage (key: string, id: FavoriteType, array: number[]) {
  array.push(id.id);
  localStorage.setItem(`${key}`, JSON.stringify(array));
}

export function removeFromLocalStorage (key: string, id: FavoriteType, array: number[]) {
  const index = array.indexOf(id.id);
  array.splice(index, 1);
  localStorage.setItem(`${key}`, JSON.stringify(array));
}
// Verifica se existe usuário cadastrado
export const users = JSON.parse(localStorage.getItem('users') || '[]');

// Verifica user logado
export const userConnected = JSON.parse(localStorage.getItem('connected') || '{}');

export function getUserLocalStorage (user: string) {
  const isUser = localStorage.getItem(user) ? JSON.parse(localStorage.getItem(user)!) : [];
  return isUser;
}
export function setUserConnectedToLocalStorage (key: string, userConnected: object) {
  localStorage.setItem( key, JSON.stringify(userConnected));
}
export function removeUserConnectedToLocalStorage (key: string) {
  localStorage.removeItem(key);
}
export function setNewUserToLocalStorage (user: string) {
  localStorage.setItem('users', JSON.stringify(user));
}
export function removeUserLocalStorage(id: number) {
  const users = JSON.parse(localStorage.getItem('users') || '[]') as { id: number }[];

  const userIndex = users.findIndex(user => user.id === id);

  if (userIndex !== -1) {

    users.splice(userIndex, 1);
    localStorage.setItem('users', JSON.stringify(users));
  } else {
    console.error(`Usuário com ID ${id} não encontrado.`);
  }
}
