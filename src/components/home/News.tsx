import { Link } from "react-router-dom";
import { Item } from "../../type";
import CardIcons from "../icons/CardIcon";
import DateTimeDisplay from "../dateTime/DateTImeDIsplay";

function News (item: Item) {
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
        <Link to={link}>
          <span>{introducao}</span>
        </Link>
      </div>
      <div className="date">
        <div>
          <DateTimeDisplay
            dateTime={ data_publicacao }
          />
        </div>
      </div>
        <CardIcons />      
   </div>
  );
}

export default News;
