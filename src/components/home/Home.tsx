import { useEffect, useState } from "react";
import FetchApi from "../../services/DataApi";
import News from "./News";
import Header from "../header/Header";
import { Item, PagesState } from "../../type";
import { PrevBtn } from "../buttons/Prev";
import { NextBtn } from "../buttons/Next";
import { useSelector } from "react-redux";


function Home() {
// Data é o estado que vai armazenar os dados da API
  const redux = useSelector((state: PagesState) => state);
  const nextOrPrevPage = redux.page // Define se a página é a próxima ou a anterior, retornoo dos botoes next e prev

  const [data, setData] = useState<{ items: Item[], page: number, totalPages: number }>({ 
    items: [],
    page: 1,
    totalPages: 1,
  });
  const [error, setError] = useState(false);
  const [changePage, setChangePage] = useState(1);
  useEffect(() => {
    if (nextOrPrevPage > 0) {
      setChangePage(nextOrPrevPage);
    }
  }, [nextOrPrevPage]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiData = await FetchApi(changePage);
        // Atualiza o estado com os dados da API
        setData(prevData => ({
          ...prevData,
          items: apiData.items,
          page: apiData.page,
          totalPages: apiData.totalPages,
          link: apiData.link,
        }));
        window.scrollTo(0, 0);
      } catch (error) {
        setError(true);
      }
    };
  
    fetchData();
  }, [changePage]);
  
  const { items, page, totalPages } = data;

  return (
    <div className=" homer-container ">
      <Header/>
      <div className="card-container">
        {error ? (
          <p>Erro ao buscar notícias!</p> 
        ) : items.length > 0 ? (
          items.map((item) => (
            
            // Passa os dados da API para o componente News
            <div key={item.id}>
              <News { ...item } /> 
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
