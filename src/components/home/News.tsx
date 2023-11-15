import { Link } from "react-router-dom";
import { useState } from "react";
import { emptyHeartIcon, markIcon, redHeartIcon, shareIcon } from "../const/icons";

interface Item {
  id: number;
  tipo: string;
  editorias: string;
  titulo: string;
  data_publicacao: string;
  introducao: string;
  link: string;
  imagens: string;
}

function News (item: Item) {
  const [isfavorite, setFavorite] = useState(false);
  // Obtem o JSON com as imagens da API, e converte para objeto
  const imageData = item.imagens;
  const imageObj = JSON.parse(imageData);
  const imageIntro = imageObj.image_intro; // Imagem da introdução filtrado do JSON
  // const imageFullText = imageObj.image_fulltext;

  // Captura a url do link da notícia para concatenar com o link da imagem
  const url = new URL(item.link);
  const domain = url.hostname;

  // Seta o estado do ícone de favorito
  const handleFavorite = () => {
    setFavorite(!isfavorite);
  }
  return (
    <div key={item.id} className="news-card">
      <img src={ `https://${domain}/${imageIntro}` } alt="" />
      <h3>{item.titulo}</h3>
      <div className="intro" >
        <Link to={item.link}>
          <span>{item.introducao}</span>
        </Link>
      </div>
      <div className="date">
        <p>{item.data_publicacao}</p>
      </div>
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
   </div>
  );
}

export default News;
