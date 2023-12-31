import { useEffect, useState } from "react";
import { FavoriteType } from "../../type";
import { getFavoriteAndMarkedFromLocalStorage, removeFavoriteAndMarkedFromLocalStorage, setFavoriteAndMarkedFromLocalStorage } from "../utils/Utils";
import { liked, unliked } from "../icons/Imports";
import { Container } from "./Style";

function Favorite (favoriteId: FavoriteType) {
  const [isFavorited, setFavorited] = useState(false);
  const [favoriteCount, setFavoriteCount] = useState(0);
  
  // Recupera o array de favoritos do localStorage
  useEffect(() => {
    const { isStored, storedItems } = getFavoriteAndMarkedFromLocalStorage('favorite',favoriteId);
    if (isStored) {
      setFavorited(true);
      setFavoriteCount(storedItems.filter((item) => item === favoriteId.id).length);
    }
  }, [favoriteId]);   

  // Seta o estado do ícone de favorito e o contador de favoritos e localStorage
  const handleFavorite = () => {
    const { isStored, storedItems } = getFavoriteAndMarkedFromLocalStorage('favorite',favoriteId);
    if (isStored) {
      removeFavoriteAndMarkedFromLocalStorage('favorite',favoriteId, storedItems);
      setFavorited(false);
      setFavoriteCount(favoriteCount - 1);
    } else {
      setFavoriteAndMarkedFromLocalStorage('favorite',favoriteId, storedItems);
      setFavorited(true);
      setFavoriteCount(favoriteCount + 1);
    }
  };
  
  return (
    <Container>
      <button
        onClick={ handleFavorite }
        data-testid="favorite"
      >
        <img
          src={ isFavorited ? liked : unliked }
          alt="favoritar"
          className="favorite-mark-and-share"
          data-testid="favorite-icon"
        />
      </button>
      <p>{ favoriteCount }</p>
    </Container>
  )
}
export default Favorite;