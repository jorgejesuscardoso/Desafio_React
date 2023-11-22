import { Link } from "react-router-dom";
import { ItemProps } from "../../type";
import DateTimeDisplay from "../dateTime/DateTImeDIsplay";
import Favorite from "../favorite/Favorite";
import Share from "../share/ShareIcon";
import Mark from "../mark/Mark";
import { CardContainer, CardImg, FooterCard, FullNewsLink, IntroNews, PostDate } from "./Style";

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
    <CardContainer key={id}>      
      <CardImg
        src={ `https://${domain}/${imageIntro}` }
        alt=""
        className="card-image"
      />
      <h3>{titulo}</h3>
      
      <IntroNews>        
          <span>{introducao}</span>
      </IntroNews>

      <FullNewsLink>
        <Link to={link}>
          <h3>Ler mais</h3>
        </Link>
      </FullNewsLink>

      <PostDate>
        <div>
          <DateTimeDisplay dateTime={ data_publicacao } />
        </div>
      </PostDate>

      <FooterCard>
        <Favorite id={ id } />
        <Share id={ id } />
        <Mark id={ id }/>
      </FooterCard>

   </CardContainer>
  );
}

export default NewsCard;
