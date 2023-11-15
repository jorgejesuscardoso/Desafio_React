import { Link } from "react-router-dom";
import { Item } from "../../type";
import CardIcons from "../icons/CardIcon";

function News (item: Item) {
  // Obtem o JSON com as imagens da API, e converte para objeto
  const imageData = item.imagens;
  const imageObj = JSON.parse(imageData);
  const imageIntro = imageObj.image_intro; // Imagem da introdução filtrado do JSON
  // const imageFullText = imageObj.image_fulltext;

  // Captura a url do link da notícia para concatenar com o link da imagem
  const url = new URL(item.link);
  const domain = url.hostname;
 
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
        <CardIcons />      
   </div>
  );
}

export default News;
