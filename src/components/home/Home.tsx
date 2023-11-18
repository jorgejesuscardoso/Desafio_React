import { useEffect, useState } from "react";
import FetchApi from "../../services/DataApi";
import NewsCard from "../card/Card";
import Header from "../header/Header";
import { DateProp, FilterTypeNewsRelease, ItemProps, MenuType, PagesState } from "../../type";
import { PrevBtn } from "../buttons/Prev";
import { NextBtn } from "../buttons/Next";
import { useSelector } from "react-redux";
import TopFilter from "../buttons/TopFilterBtn";
import FooterFIlterBtn from "../buttons/FooterFIlterBtn";
import DisplayFooterFIlter from "../buttons/DisplayFooterFIlter";
import FilterDate from "../filter/FilterDate";


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

  const [data, setData] = useState<{ items: ItemProps[], page: number, totalPages: number }>({ 
    items: [], // Armazena os itens da API
    page: 1, // Define a página inicial
    totalPages: 1, // Define o total de páginas inicial para evitar erros
  });

  const [error, setError] = useState(false); // Armazena o erro da API
  const [numberPage, setNumberPage] = useState(1); // Armazena a página atual
  const [typeNews, setTypeApi] = useState(''); // Armazena o tipo de API
  
  useEffect(() => {
    if (filterNewsAndRelease || filterNewsAndRelease === '') {
      setTypeApi(filterNewsAndRelease); // Se o tipo de API for all, não passa nada para a API
    }
    const fetchData = async () => {
      try {
        const apiData = await FetchApi(typeNews, numberPage, filterDate); // Chama a API
        setData(prevData => ({
          ...prevData,
          items: apiData.items,
          page: apiData.page,
          totalPages: apiData.totalPages,
        })); // Atualiza o estado data com os dados da API
        
        window.scrollTo(0, 0);

      } catch (error) {
        setError(true);
      }
    };
  
    fetchData();
  }, [numberPage, typeNews, filterNewsAndRelease, filterDate]);

  useEffect(() => {
    if (nextOrPrevPage > 0) {
      setNumberPage(nextOrPrevPage);
    }
  }, [nextOrPrevPage]); // Sem useEffect precisa clicar duas vezes para atualizar o estado
  
  const { items, page, totalPages } = data; // Desestrutura o estado para usar os dados da API
  console.log(data)
  return (
    <>
      <Header />
      <main className=" homer-container ">
        <div className="top-filter">
          <TopFilter />
        </div>
        <section className="card-container">
          {error ? (
            <p>Erro ao buscar as notícias!</p> 
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
