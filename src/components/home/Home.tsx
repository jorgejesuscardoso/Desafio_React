import { useEffect, useState } from "react";
import FetchApi from "../../services/DataApi";
import NewsCard from "../card/Card";
import Header from "../header/Header";
import { Item, MenuType, PagesState } from "../../type";
import { PrevBtn } from "../buttons/Prev";
import { NextBtn } from "../buttons/Next";
import { useSelector } from "react-redux";
import FooterFIlterBtn from "../buttons/FooterFIlterBtn";
import MenuFooterFIlter from "../filter/FooterFilter";
import TopFilter from "../filter/TopFilter";


function Home() {
  const redux = useSelector((state: PagesState) => state.pageReducer); // Armazena o estado do redux. Botoes next e prev
  const nextOrPrevPage = redux.page 

  const footerMenu = useSelector((state: MenuType) => state.footerMenu);
  const displayMenu = footerMenu.display;

  const [data, setData] = useState<{ items: Item[], page: number, totalPages: number }>({ 
    items: [], // Armazena os itens da API
    page: 1, // Define a página inicial
    totalPages: 1, // Define o total de páginas inicial para evitar erros
  });

  const [error, setError] = useState(false); // Armazena o erro da API
  const [changePage, setChangePage] = useState(1); // Armazena a página atual
  
  useEffect(() => {
    if (nextOrPrevPage > 0) {
      setChangePage(nextOrPrevPage);
    }
  }, [nextOrPrevPage]); // Sem useEffect precisa clicar duas vezes para atualizar o estado

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiData = await FetchApi(changePage); // Chama a API
        setData(prevData => ({
          ...prevData,
          items: apiData.items,
          page: apiData.page,
          totalPages: apiData.totalPages,
          link: apiData.link,
        })); // Atualiza o estado data com os dados da API

        window.scrollTo(0, 0); // Faz o scroll para o topo da página ao mudar de página
      } catch (error) {
        setError(true);
      }
    };
  
    fetchData();
  }, [changePage]);
  
  const { items, page, totalPages } = data; // Desestrutura o estado para usar os dados da API
  return (
    <>
      <Header />
      <main className=" homer-container ">
        <div className="top-filter">
          <TopFilter />
        </div>
        <section className="card-container">
          {error ? (
            <p>Erro ao buscar notícias!</p> 
          ) : items.length > 0 ? (
            items.map((item) => (
              
              <div key={item.id}>
                <NewsCard { ...item } /> 
              </div>
            ))
          ) : (
            <p>Carregando...</p>
          )}        
        </section>{ displayMenu 
          ? (<div className="display-menu">
            <MenuFooterFIlter />
          </div>)
          : (' ')}
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
