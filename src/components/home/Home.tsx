/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import FetchApi from "../../services/DataApi";
import NewsCard from "../card/Card";
import Header from "../header/Header";
import { DateProp, FilterTypeNewsRelease, ItemProps, MenuType, MiscellanousFilterType, PagesState, SearchNewsType } from "../../type";
import { PrevBtn } from "../buttons/Prev";
import { NextBtn } from "../buttons/Next";
import { useSelector } from "react-redux";
import FooterFIlterBtn from "../buttons/FooterFIlterBtn";
import DisplayFooterFIlter from "../buttons/DisplayFooterFIlter";
import FilterDate from "../filter/FilterDate";
import { scrolTop } from "../utils/Utils";
import { 
  CardContainer,
  Container,
  ErrMsg,
  FooterHome,
  PopUpAlert } from "./Style";


function Home() {
  const handlePage = useSelector((state: PagesState) => state.pageReducer); 
  const nextOrPrevPage = handlePage.page // Armazena o estado do redux. Botoes next e prev

  const footerMenu = useSelector((state: MenuType) => state.footerMenu);
  const displayMenu = footerMenu.display;

  const filterNewsState = useSelector((state: FilterTypeNewsRelease) => state.filterNewsAndRelease);
  const { filterNewsAndRelease } = filterNewsState;

  const handleDate = useSelector((state: DateProp) => state.filterDate);
  const { filterDate } = handleDate;
  const { searchDate } = handleDate; 

  const handleMiscellaneousFilter = useSelector((state: MiscellanousFilterType) => state.filterAll);
  const {
    filterEconomy,
    filterFavorite,
    filterGeoscience,
    filterIbge,
    filterMarked,
    filterSocial,
    } = handleMiscellaneousFilter;
  
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

  const Filtros = (apiData: FilterTypeNewsRelease) => {
    const filterByEditory = apiData.items.filter((item: ItemProps) => {
      if (filterEconomy) {
        return item.editorias === 'economicas';
      }
      if (filterGeoscience) {
        return item.editorias === 'geociencias';
      }
      if (filterIbge) {
        return item.editorias === 'ibge';
      }
      if (filterSocial) {
        return item.editorias === 'sociais';
      }
      //Obtem os favoritos na chave favorite do localStorage
      if (filterFavorite) {
        const favoriteList = JSON.parse(localStorage.getItem('favorite') || '[]');
        if (favoriteList.length === 0) {
          setPopUp('Não há notícias favoritadas')
          return item;
        }
        return favoriteList.includes(item.id);
      }
      //Obtem os marcados na chave marked do localStorage
      if (filterMarked) {
        const markedList = JSON.parse(localStorage.getItem('marked') || '[]');
        if (markedList.length === 0) {
          setPopUp('Não há notícias marcadas')
          return item;
        }
        return markedList.includes(item.id);
      }
      return item;
    }
    );
    return filterByEditory;
  }

  useEffect(() => {
    if (filterNewsAndRelease || filterNewsAndRelease === '') {
      setTypeNews(filterNewsAndRelease); 
    }
  }, [filterNewsAndRelease])

  useEffect(() => {
     const fetchData = async () => {
      try {
        const apiData = await FetchApi(
          typeNews,
          numberPage,
          filterDate,
          searchNews,
          ); 
        const filterByEditoria = Filtros(apiData);
        if (Array.isArray(filterByEditoria) && filterByEditoria.length === 0) {
          setNumberPage(numberPage + 1); // Se não houver notícias na página atual, avança até uma página que tenha notícias
        }
        setData(prevData => ({
          ...prevData,
          items: filterByEditoria,
          page: apiData.page,
          totalPages: apiData.totalPages,
        }));         
        window.scrollTo(0, 0);
      } catch (error) {
        setError(true);
      }
    };
    fetchData();
  }, [numberPage, typeNews, filterDate, filterEconomy, filterGeoscience, filterIbge, filterSocial, filterFavorite, searchNews, filterMarked]);

  useEffect(() => {
    if (nextOrPrevPage > 0) {
      setNumberPage(nextOrPrevPage); // Atualiza o estado para o número da próxima ou da página anterior.
      scrolTop();
    }
  }, [nextOrPrevPage]); // Sem useEffect precisa clicar duas vezes para atualizar o estado
  
  const { items, page, totalPages } = data;

  return (
    <>
      <Header />
      <Container>
        <CardContainer className="card-container">
          {error || items.length === 0 
            ? (
                <ErrMsg>
                  <p>
                    Erro ao buscar por notícias ou não há notícias nesta página. Você pode aguardar um momento, tentar avançar para a próxima página ou recarregar a página para limpar os filtros.
                  </p>
                  
                  <button
                    onClick={() => window.location.reload()}
                  >
                    Recarregar
                  </button>
                </ErrMsg>
              ) 
            : items.length > 0 ? (
                items.map((item) => (
                  
                  <div key={item.id}>
                    <NewsCard { ...item } /> 
                  </div>
                ))
               )
            : (<p>Carregando...</p>)
          }   

        </CardContainer>

        { displayMenu ? (<DisplayFooterFIlter />) : (' ') }

        { searchDate ? (<FilterDate />) : ('') }

        { popUp
          ? (
              <PopUpAlert>
                <p>{ popUp }</p>
                <button 
                  onClick={() => setPopUp('')}
                >
                  X
                </button>
              </PopUpAlert>
            )
          : ('')
        }
      </Container>
      
      <FooterHome>
        <PrevBtn page={page} totalPages={totalPages} />
        <FooterFIlterBtn />
        <NextBtn page={page} totalPages={totalPages} />
      </FooterHome>
    </>
  );
}

export default Home;
