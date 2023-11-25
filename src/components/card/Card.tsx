/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";
import DateTimeDisplay from "../dateTime/DateTImeDIsplay";
import Favorite from "../favorite/Favorite";
import Share from "../share/ShareIcon";
import Mark from "../mark/Mark";
import { CardContainer, CardImg, FooterCard, FullNewsLink, IntroNews, PostDate } from "./Style";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { DarkModeType } from "../home/Home";

function NewsCard (item: any) {

  const darkMode = useSelector((state: DarkModeType) => state.darkMode);
  
  const { id, titulo, link, imagens, introducao, data_publicacao } = item;
  const [isDarkMode, setIsDarkMode] = useState(darkMode);

useEffect(() => {
  setIsDarkMode(darkMode);
  if (darkMode) {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }
}
, [darkMode]);
  
  // Obtem o JSON com as imagens da API, e converte para objeto
  const startPosImageIntro = imagens && imagens.indexOf('"image_intro":"') + '"image_intro":"'.length;
  const endPosImageIntro = imagens && imagens.indexOf('","', startPosImageIntro);

  // Extraindo o valor da chave "image_intro"
  const imageIntroUrl = imagens && imagens.slice(startPosImageIntro, endPosImageIntro);

  // Captura a url do link da notícia para concatenar com o link da imagem

  const url = item.link &&  new URL(item.link);
  const domain = url &&  url.hostname;
 
  return (
    <CardContainer
      key={id}
      className={ isDarkMode ? 'dark-mode' : '' }
      >      
      <CardImg
        src={ `https://${domain}/${imageIntroUrl}` }
        alt="Imagem da notícia"
        data-testid="card-img"
      />
      <h3>{titulo}</h3>
      
      <IntroNews>        
          <span>{introducao}</span>
      </IntroNews>

      <FullNewsLink data-testid="ler-mais">
        <Link to={link}>
          <h3>Ler mais</h3>
        </Link>
      </FullNewsLink>

      <PostDate>
        <div>
          <DateTimeDisplay dateTime={ data_publicacao } />
        </div>
      </PostDate>

      <FooterCard className={ isDarkMode ? 'dark-mode-header' : '' }>
        <Favorite id={ id } />
        <Share id={ id } />
        <Mark id={ id }/>
      </FooterCard>
   </CardContainer>
  );
}

export default NewsCard;
