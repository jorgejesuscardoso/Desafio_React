/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import FetchApi from "../../services/DataApi";
import Header from "../header/Header";
import { DateProp,
  FilterTypeNewsRelease,
  ItemProps,
  MenuType,
  MiscellanousFilterType,
  PagesState,
  SearchNewsType } from "../../type";
import { PrevBtn } from "../buttons/Prev";
import { NextBtn } from "../buttons/Next";
import { useSelector } from "react-redux";
import FooterFIlterBtn from "../buttons/FooterFIlterBtn";
import DisplayFooterFIlter from "../filter/DisplayFooterFIlter";
import FilterDate from "../filter/DisplayDateFilter";
import { handleApiData, scrolTop } from "../utils/Utils";
import { 
  CardContainer,
  Container,
  FooterHome } from "./Style";
import PopUp from "./PopUp";
import Content from "./HomeContent";
import Footer from "../footer/Footer";


function Home() {

  const handlePage = useSelector((state: PagesState) => state.pageReducer); 
  const nextOrPrevPage = handlePage.page // Armazena o estado do redux. Botoes next e prev

  const footerMenu = useSelector((state: MenuType) => state.footerMenu);
  const displayFooterMenu = footerMenu.display;

  const filtraTipoDeNoticia = useSelector((state: FilterTypeNewsRelease) => state.filterNewsAndRelease);
  const { filterNewsAndRelease } = filtraTipoDeNoticia;

  const handleDate = useSelector((state: DateProp) => state.filterDate);
  const { filterDate } = handleDate;
  const { searchDate } = handleDate; 

  const AllFilters = useSelector((state: MiscellanousFilterType) => state.filterAll);
    
  const { searchNews }  = useSelector((state: SearchNewsType) => state.search);
 
  const [data, setData] = useState<{ items: ItemProps[], page: number, totalPages: number }>({ 
    items: [], // Armazena os itens da API
    page: 1, 
    totalPages: 1, 
  });
  const [error, setError] = useState(false); 
  const [numberPage, setNumberPage] = useState(1);
  const [typeNews, setTypeNews] = useState(''); 
  const [popUp, setPopUp] = useState(''); 

  
  useEffect(() => {
    if (filterNewsAndRelease || filterNewsAndRelease === '') {
      setTypeNews(filterNewsAndRelease); 
    }
  }, [filterNewsAndRelease])

  const fetchData = async () => {
    try {
      const apiData = await FetchApi(typeNews, numberPage, filterDate, searchNews);
      handleApiData({ apiData, setNumberPage, setData, AllFilters, setPopUp});
    } catch (error) {
      setError(true);
    }
  };

  useEffect(() => {    
    fetchData();
  }, [AllFilters, numberPage, searchNews, filterDate, typeNews]);
    

  useEffect(() => {
    if (nextOrPrevPage > 0) {
      setNumberPage(nextOrPrevPage); // Atualiza o estado para o número da próxima ou da página anterior.
      scrolTop();
    }
  }, [nextOrPrevPage]); // Sem useEffect precisa clicar duas vezes para atualizar o estado
  
  const { items, page, totalPages } = data;


  const renderDisplayFooterFilter = () => {
    return displayFooterMenu ? <DisplayFooterFIlter /> : null;
  };
  
  const renderFilterDate = () => {
    return searchDate ? <FilterDate /> : null;
  };
  
  const renderPopUp = () => {
    return popUp ? <PopUp popUp={popUp} setPopUp={setPopUp} /> : null;
  };
  return (
    <>
      <Header />
      <Container>
        <CardContainer className="card-container">
          <Content
            items={ items }
            error={ error }
            page={ page }
          />
        </CardContainer>
        { renderDisplayFooterFilter() }
        { renderFilterDate() }
        { renderPopUp() }
      </Container>      
      <FooterHome>
        <PrevBtn page={page} totalPages={totalPages} />
        <FooterFIlterBtn />
        <NextBtn page={page} totalPages={totalPages} />
      </FooterHome>
      <Footer />
    </>
  );
}

export default Home;
