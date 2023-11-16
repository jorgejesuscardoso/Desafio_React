import { useState } from "react";
import { shareIcon } from "../icons/Imports";

function Share() {
  const [shareCount, setShareCount] = useState(0);

  // Seta o estado do ícone de favorito
  const handleShare = () => {
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
