import { useState } from 'react';
import { redHeartIcon, emptyHeartIcon, shareIcon, markIcon } from './Imports';

function CardIcons () {
  const [isfavorite, setFavorite] = useState(false);

  // Seta o estado do ícone de favorito
  const handleFavorite = () => {
    setFavorite(!isfavorite);
  }
  return (
    <div className="favorite-mark-and-share-container">
        <button onClick={ handleFavorite }>
          <img
            src={ isfavorite ? redHeartIcon : emptyHeartIcon }
            alt="favorite"
            className="favorite-mark-and-share"
          />
        </button>
        <button>
          <img
            src={ shareIcon }
            alt="share"
            className="favorite-mark-and-share"
          />
        </button>
        <button>
          <img
            src={ markIcon }
            alt="mark"
            className="favorite-mark-and-share"
          />
        </button>
      </div>
  );
}

export default CardIcons;