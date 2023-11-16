import { useState } from "react";
import { markIcon, unMarkIcon } from "../icons/Imports";

function Mark () {
  const [isMarked, setMarked] = useState(false);
  const handleMark = () => {
    setMarked(!isMarked);
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
