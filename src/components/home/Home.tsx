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


function Home() {
  const handlePage = useSelector((state: PagesState) => state.pageReducer); // Armazena o estado do redux. Botoes next e prev
  const nextOrPrevPage = handlePage.page 

  const footerMenu = useSelector((state: MenuType) => state.footerMenu);
  const displayMenu = footerMenu.display;

  const filterNewsState = useSelector((state: FilterTypeNewsRelease) => state.filterNewsAndRelease);
  const { filterNewsAndRelease } = filterNewsState;

  const handleDate = useSelector((state: DateProp) => state.filterDate);
  const { filterDate } = handleDate; // Armazena a data de filtro
  const { searchDate } = handleDate; // Armazena a data de filtro

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
    page: 1, // Define a página inicial
    totalPages: 1, // Define o total de páginas inicial para evitar erros
  });

  const [error, setError] = useState(false); // Armazena o erro da API
  const [numberPage, setNumberPage] = useState(1); // Armazena a página atual
  const [typeNews, setTypeApi] = useState(''); // Armazena o tipo de API
  const [popUp, setPopUp] = useState(''); 

  useEffect(() => {
    if (filterNewsAndRelease || filterNewsAndRelease === '') {
      setTypeApi(filterNewsAndRelease); 
    }
    const fetchData = async () => {
      try {
        const apiData = await FetchApi(
          typeNews,
          numberPage,
          filterDate,
          searchNews,
          ); // Chama a API
        // Filtrar por editorias
        const filterByEditoria = apiData.items.filter((item: ItemProps) => {
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
        if (filterByEditoria.length === 0) {
          setNumberPage(numberPage + 1); // Se não houver notícias na página atual, avança até uma página que tenha notícias
        }
        setData(prevData => ({
          ...prevData,
          items: filterByEditoria,
          page: apiData.page,
          totalPages: apiData.totalPages,
        })); // Atualiza o estado data com os dados da API
        
        window.scrollTo(0, 0);

      } catch (error) {
        setError(true);
      }
    };
  console.log('useeffect')
    fetchData();
  }, [numberPage, typeNews, filterNewsAndRelease, filterDate, filterEconomy, filterGeoscience, filterIbge, filterSocial, filterFavorite, searchNews, filterMarked]);

  useEffect(() => {
    if (nextOrPrevPage > 0) {
      setNumberPage(nextOrPrevPage);
      scrolTop();
    }
  }, [nextOrPrevPage]); // Sem useEffect precisa clicar duas vezes para atualizar o estado
  
  const { items, page, totalPages } = data; // Desestrutura o estado para usar os dados da API
  return (
    <>
      <Header />
      <main className=" homer-container ">
        <section className="card-container">
          {error || items.length === 0 ? (
            <div className="error-div">
            <p>
              Erro ao buscar por notícias ou não há notícias nesta página. Você pode aguardar um momento, tentar avançar para a próxima página ou recarregar a página para limpar os filtros.
            </p>
            <button onClick={() => window.location.reload()}>Recarregar</button>
          </div>
          ) : items.length > 0 ? (
            items.map((item) => (
              
              <div key={item.id}>
                <NewsCard { ...item } /> 
              </div>
            ))
          ) : (
            <p>Carregando...</p>
          )}        
        </section>
        { displayMenu 
          ? (<div className="display-footer-menu">
            <DisplayFooterFIlter />
          </div>)
          : (' ')}
        { searchDate
          ? (<FilterDate />)
          : ('')
        }
        { popUp
          ? (<div className="pop-up">
            <p>{ popUp }</p>
            <button onClick={() => setPopUp('')}>X</button>
          </div>)
          : ('')
        }
      </main>
      <footer className="page-btn-container">
        <PrevBtn page={page} totalPages={totalPages} />
        <FooterFIlterBtn />
        <NextBtn page={page} totalPages={totalPages} />
      </footer>
    </>
  );
}

export default Home;
