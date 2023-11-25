import { useEffect, useState } from "react";
import { markIcon, unMarkIcon } from "../icons/Imports";
import { FavoriteType } from "../../type";
import { getFavoriteAndMarkedFromLocalStorage, removeFavoriteAndMarkedFromLocalStorage, setFavoriteAndMarkedFromLocalStorage } from "../utils/Utils";

function Mark (id: FavoriteType) {
  const [isMarked, setMarked] = useState(false);

  useEffect(() => {
    const { isStored } = getFavoriteAndMarkedFromLocalStorage('marked',id)
    setMarked(isStored)
  }, [id]);  
  // Seta o estado do ícone de marcação e local storage
  const handleMark = () => {
    const { isStored, storedItems } = getFavoriteAndMarkedFromLocalStorage('marked',id)
    if (isStored) {
      removeFavoriteAndMarkedFromLocalStorage('marked',id, storedItems)
      setMarked(false)
    } else {
      setFavoriteAndMarkedFromLocalStorage('marked',id, storedItems)
      setMarked(true)
    }
  }
  return (
    <div>
      <button onClick={ handleMark } data-testid='mark'>
          <img
            src={ isMarked ? markIcon : unMarkIcon }
            alt="marcar"
            className="favorite-mark-and-share"
            data-testid="mark-icon"
          />
        </button>
    </div>
  )
}

export default Mark;
