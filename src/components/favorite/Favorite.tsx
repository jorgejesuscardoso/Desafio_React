import { useEffect, useRef, useState } from "react";
import { emptyHeartIcon, redHeartIcon } from "../icons/Imports";
import { FavoriteType } from "../../type";

function Favorite (favoriteId: FavoriteType) {
  const [isfavorite, setFavorite] = useState(false);
  const [favoriteCount, setFavoriteCount] = useState(0);

  const ancor = useRef(1) // Evita que o useEffect seja executado infinitamente
  
  // Recupera o array de favoritos do localStorage
  useEffect(() => {
    const Store = localStorage.getItem("favorite") || "[]";
    const favoriteArray = JSON.parse(Store);
    const getStore = [...favoriteArray]
    const isFavorite = getStore.includes(favoriteId.favoriteId);
    if (isFavorite && ancor.current === 1) {
      setFavorite(true);
      setFavoriteCount(favoriteCount + 1);
    }
    ancor.current += 1;
  }, [favoriteId, favoriteCount]);   

  console.log(favoriteId);
  // Seta o estado do ícone de favorito e o contador de favoritos e localStorage
  const handleFavorite = () => {
    const Store = localStorage.getItem("favorite") || "[]";    
    const favoriteArray = JSON.parse(Store);
    const getStore = [...favoriteArray]
    const isFavorite = getStore.includes(favoriteId.favoriteId);
    if (isFavorite) {
      const index = getStore.indexOf(favoriteId.favoriteId);
      getStore.splice(index, 1);
      localStorage.setItem("favorite", JSON.stringify(getStore));
      setFavorite(false);
      setFavoriteCount(favoriteCount - 1);
    } else {
      getStore.push(favoriteId.favoriteId);
      localStorage.setItem("favorite", JSON.stringify(getStore));
      setFavorite(true);
      setFavoriteCount(favoriteCount + 1);
    }
  };
  
  return (
    <div className="favoriteCount">
      <button
        onClick={ handleFavorite }
      >
        <img
          src={ isfavorite ? redHeartIcon : emptyHeartIcon }
          alt="favorite"
          className="favorite-mark-and-share"
        />
      </button>
      <p>{ favoriteCount }</p>
    </div>
  )
}
export default Favorite;