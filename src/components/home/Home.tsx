import { useEffect, useState } from "react";
import FetchApi from "../../services/DataApi";
import NewsCard from "../card/Card";
import Header from "../header/Header";
import { Item, PagesState } from "../../type";
import { PrevBtn } from "../buttons/Prev";
import { NextBtn } from "../buttons/Next";
import { useSelector } from "react-redux";


function Home() {
  const redux = useSelector((state: PagesState) => state); // Armazena o estado do redux. Botoes next e prev

  const nextOrPrevPage = redux.page 

  const [data, setData] = useState<{ items: Item[], page: number, totalPages: number }>({ 
    items: [], // Armazena os itens da API
    page: 1, // Define a página inicial
    totalPages: 1, // Define o total inicial de páginas para evitar erros
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
    <div className=" homer-container ">
      <Header/>
      <div className="card-container">
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
      </div>
      <div className="page-btn-container">
        <PrevBtn page={page} totalPages={totalPages} />
        <NextBtn page={page} totalPages={totalPages} />
      </div>
    </div>
  );
}

export default Home;
