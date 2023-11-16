import { useEffect, useState } from "react";
import { shareIcon } from "../icons/Imports";
import { FavoriteType } from "../../type";
import { getLocalStorage, setLocalStorage } from "../utils/Utils";

function Share(id: FavoriteType) {

  const [shareCount, setShareCount] = useState(0);

  useEffect(() => {
    const { isStored, storedItems } = getLocalStorage('shared',id)
    if (isStored) {
      setShareCount(storedItems.filter((item) => item === id.id).length);
    }
  },[id]);

  // Seta o estado e localstorage do ícone de compartilhar
  const handleShare = () => {
    const { storedItems } = getLocalStorage('shared',id)
      setLocalStorage('shared',id, storedItems)
      setShareCount(shareCount + 1);    
  }
  return(
    <div className="favoriteCount">
      <button onClick={ handleShare }>
        <img
          src={ shareIcon }
          alt="share"
          className="favorite-mark-and-share"
        />
      </button>
      <p>{ shareCount }</p>
    </div>
  );
}

export default Share;
