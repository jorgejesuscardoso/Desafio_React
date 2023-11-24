import { useEffect, useState } from "react";
import { shareIcon } from "../icons/Imports";
import { FavoriteType } from "../../type";
import { getFavoriteAndMarkedFromLocalStorage, setLocalStorage } from "../utils/Utils";
import { Container } from "./Style";

function Share(id: FavoriteType) {

  const [shareCount, setShareCount] = useState(0);

  useEffect(() => {
    const { isStored, storedItems } = getFavoriteAndMarkedFromLocalStorage('shared',id)
    if (isStored) {
      setShareCount(storedItems.filter((item) => item === id.id).length);
    }
  },[id]);

  // Seta o estado e localstorage do ícone de compartilhar
  const handleShare = () => {
    const { storedItems } = getFavoriteAndMarkedFromLocalStorage('shared',id)
      setLocalStorage('shared',id, storedItems)
      setShareCount(shareCount + 1);    
  }
  return(
    <Container>
      <button onClick={ handleShare } data-testid='share'>
        <img
          src={ shareIcon }
          alt="share"
          className="favorite-mark-and-share"
        />
      </button>
      <p data-testid='count-share'>{ shareCount }</p>
    </Container>
  );
}

export default Share;
