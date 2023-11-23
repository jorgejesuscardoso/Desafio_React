import { useEffect, useState } from "react";
import { markIcon, unMarkIcon } from "../icons/Imports";
import { FavoriteType } from "../../type";
import { getFavoriteAndMarkedFromLocalStorage, removeFavoriteAndMarkedFromLocalStorage, setLocalStorage } from "../utils/Utils";

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
      setLocalStorage('marked',id, storedItems)
      setMarked(true)
    }
  }
  return (
    <div>
      <button onClick={ handleMark }>
          <img
            src={ isMarked ? markIcon : unMarkIcon }
            alt="mark"
            className="favorite-mark-and-share"
          />
        </button>
    </div>
  )
}

export default Mark;
