import { useEffect, useState } from "react";
import { FavoriteType } from "../../type";
import { getLocalStorage, removeFromLocalStorage, setLocalStorage } from "../utils/Utils";
import { liked, unliked } from "../icons/Imports";

function Favorite (favoriteId: FavoriteType) {
  const [isFavorited, setFavorited] = useState(false);
  const [favoriteCount, setFavoriteCount] = useState(0);
  
  // Recupera o array de favoritos do localStorage
  useEffect(() => {
    const { isStored, storedItems } = getLocalStorage('favorite',favoriteId);
    if (isStored) {
      setFavorited(true);
      setFavoriteCount(storedItems.filter((item) => item === favoriteId.id).length);
    }
  }, [favoriteId]);   

  // Seta o estado do ícone de favorito e o contador de favoritos e localStorage
  const handleFavorite = () => {
    const { isStored, storedItems } = getLocalStorage('favorite',favoriteId);
    if (isStored) {
      removeFromLocalStorage('favorite',favoriteId, storedItems);
      setFavorited(false);
      setFavoriteCount(favoriteCount - 1);
    } else {
      setLocalStorage('favorite',favoriteId, storedItems);
      setFavorited(true);
      setFavoriteCount(favoriteCount + 1);
    }
  };
  
  return (
    <div className="favoriteCount">
      <button
        onClick={ handleFavorite }
      >
        <img
          src={ isFavorited ? liked : unliked }
          alt="favorite"
          className="favorite-mark-and-share"
        />
      </button>
      <p>{ favoriteCount }</p>
    </div>
  )
}
export default Favorite;