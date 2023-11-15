import { useEffect, useState } from "react";
import FetchApi from "../../services/DataApi";
import News from "./News";
import Header from "../header/Header";

// Tipagem dos dados da API
interface Item {
  id: number;
  tipo: string;
  editorias: string;
  titulo: string;
  data_publicacao: string;
  introducao: string;
  link: string;
}

function Home() {
// Data é o estado que vai armazenar os dados da API
  const [data, setData] = useState<{ items: Item[], page: number, totalPages: number }>({ 
    items: [],
    page: 1,
    totalPages: 1,
  });
// currentPage é o estado que vai armazenar o número da página atual
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiData = await FetchApi(currentPage);
        // Atualiza o estado com os dados da API, e também com o número da página atual e o total de páginas. prevData é o estado anterior.
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
  }, [currentPage]);
  
  const { items, page, totalPages } = data;

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1); // pages++
  }
  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1); // pages--
  }

  console.log(data);
  return (
    <div className=" container-home ">
      <Header/>
      <div>
        {error ? (
          <p>Erro ao buscar notícias!</p> // Caso ocorra algum erro na requisição, exibe essa mensagem
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
        <button
          onClick={handlePrevPage}
          disabled={page === 1}
        >
          Prev
        </button>
        <button
          onClick={handleNextPage}
          disabled={page === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Home;
