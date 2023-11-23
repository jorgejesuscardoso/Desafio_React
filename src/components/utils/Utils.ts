/* eslint-disable @typescript-eslint/no-explicit-any */
import { ApiDataType, FavoriteType, ItemProps } from "../../type";

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


export const Filtros = ({ apiData, AllFilters, setPopUp }: any) => {
  const { filterGeoscience, filterSocial, filterIbge, filterEconomy, filterMarked, filterFavorite } = AllFilters;
  const filterByEditory = apiData.items.filter((item: ItemProps) => {
    if (filterEconomy) {
      return item.editorias === 'economicas';
    }
    if (filterGeoscience) {
      return item.editorias === 'geociencias';
    }
    if (filterIbge) {
      return item.editorias === 'ibge';
    }
    if (filterSocial) {
      return item.editorias === 'sociais';
    }
    if (filterFavorite) {
      const favoriteList = JSON.parse(localStorage.getItem('favorite') || '[]');
      if (favoriteList.length === 0) {
        setPopUp('Não há notícias favoritadas')
        return item;
      }
      return favoriteList.includes(item.id);
    }
    if (filterMarked) {
      const markedList = JSON.parse(localStorage.getItem('marked') || '[]');
      if (markedList.length === 0) {
        setPopUp('Não há notícias marcadas')
        return item;
      }
      return markedList.includes(item.id);
    }
    return item;
  }
  );
  return filterByEditory;
}


export const handleApiData = ({ apiData, setNumberPage, setData, AllFilters, setPopUp }: ApiDataType) => {
  const filterByEditoria = Filtros({ apiData, AllFilters, setPopUp });
  if (Array.isArray(filterByEditoria) && filterByEditoria.length === 0) {
    setNumberPage((prevNumberPage: number) => prevNumberPage + 1);
  }
  setData((prevData: any) => ({
    ...prevData,
    items: filterByEditoria,
    page: apiData.page,
    totalPages: apiData.totalPages,
  }));
  scrolTop();
};
