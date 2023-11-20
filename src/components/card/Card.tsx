import { Link } from "react-router-dom";
import { ItemProps } from "../../type";
import DateTimeDisplay from "../dateTime/DateTImeDIsplay";
import Favorite from "../favorite/Favorite";
import Share from "../share/ShareIcon";
import Mark from "../mark/Mark";

function NewsCard (item: ItemProps) {
  const { id, titulo, link, imagens, introducao, data_publicacao } = item;
  
  // Obtem o JSON com as imagens da API, e converte para objeto
  const imageData = imagens;
  const imageObj = JSON.parse(imageData);
  const imageIntro = imageObj.image_intro; // Imagem da introdução filtrado do JSON

  // Captura a url do link da notícia para concatenar com o link da imagem
  const url = new URL(item.link);
  const domain = url.hostname;
 
  return (
    <div key={id} className="news-card">      
      <img
        src={ `https://${domain}/${imageIntro}` }
        alt=""
        className="card-image"
      />
      <h3>{titulo}</h3>
      <div className="intro" >        
          <span>{introducao}</span>
      </div>
      <div className="link-full-news">
        <Link to={link}>
          <h3>Ler mais</h3>
        </Link>
      </div>
      <div className="date">
        <div>
          <DateTimeDisplay
            dateTime={ data_publicacao }
          />
        </div>
      </div>
      <div className="favorite-mark-and-share-container">
        <Favorite 
          id={ id }
        />
        <Share
          id={ id }
        />
        <Mark
          id={ id }
        />
      </div>
   </div>
  );
}

export default NewsCard;
